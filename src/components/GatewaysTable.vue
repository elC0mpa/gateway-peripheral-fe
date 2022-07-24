<template>
  <a-table
    :columns="columns"
    :data-source="gateways"
    :pagination="false"
    :loading="isLoading"
    align="center"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'actions'">
        <a-button
          type="primary"
          shape="circle"
          @click="createGatewayModalVisibility = true"
          ><template #icon><PlusOutlined /></template>
        </a-button>
        {{ column.title }}
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'actions'">
        <a-popconfirm
          title="Are you sure you want to delete this gateway?"
          okType="danger"
          @confirm="onDeleteGateway(record)"
        >
          <a-button type="danger" shape="circle">
            <template #icon><DeleteOutlined /></template>
          </a-button>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
  <create-gateway-modal
    :isVisible="createGatewayModalVisibility"
    @close="createGatewayModalVisibility = false"
    @success="gatewayCreated"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { getGateways, deleteGateway } from "../composables/api";
import { GatewaysTableDataType } from "@/types/components";
import { Gateway } from "../types";
import { openNotificationWithIcon } from "@/composables/utils";
import CreateGatewayModal from "./CreateGatewayModal.vue";

import { Table, Popconfirm, Button } from "ant-design-vue";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons-vue";
import "ant-design-vue/lib/table/style/css";
import "ant-design-vue/lib/popconfirm/style/css";

export default defineComponent({
  name: "GatewaysTable",
  components: {
    ATable: Table,
    AButton: Button,
    DeleteOutlined,
    APopconfirm: Popconfirm,
    CreateGatewayModal,
    PlusOutlined,
  },
  setup() {
    const data: GatewaysTableDataType = reactive({
      columns: [
        {
          title: "Serial Number",
          dataIndex: "serialNumber",
          key: "serialNumber",
        },
        {
          title: "Label",
          dataIndex: "label",
          key: "label",
        },
        {
          title: "IPv4 address",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Actions",
          key: "actions",
        },
      ],
      gateways: [],
      isLoading: true,
      createGatewayModalVisibility: false,
    });

    const onDeleteGateway = async (gateway: Gateway) => {
      try {
        data.isLoading = true;
        await deleteGateway(gateway._id);
        openNotificationWithIcon("success", "Gateway succesfully deleted");
        await refreshGateways();
      } catch (error) {
        console.log("Error while deleting gateway: ", error);
      } finally {
        data.isLoading = false;
      }
    };

    const refreshGateways = async () => {
      try {
        data.isLoading = true;
        data.gateways = await getGateways();
      } catch (error) {
        console.log("Error while getting gateways");
      } finally {
        data.isLoading = false;
      }
    };

    const gatewayCreated = async () => {
      data.createGatewayModalVisibility = false;
      await refreshGateways();
    };

    refreshGateways();

    return {
      ...toRefs(data),
      onDeleteGateway,
      gatewayCreated,
    };
  },
});
</script>

<style lang="scss" scoped>
.gateway-crud {
  display: flex;
  flex-direction: column;
  &__create-button {
    margin-bottom: 15px;
    align-self: flex-end;
  }
}
</style>

