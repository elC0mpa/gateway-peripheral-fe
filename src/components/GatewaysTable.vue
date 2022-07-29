<template>
  <a-table
    :columns="columns"
    :data-source="gateways"
    :pagination="false"
    :loading="isLoading"
    :expanded-row-keys="expandedRows"
    rowKey="serialNumber"
    :scroll="{
      x: 600,
    }"
    class="gateways-table"
  >
    <template #expandIcon="{ expandable, expanded, record }">
      <a-button
        class="expand-row-button"
        :class="{ 'pulsation-button': !expanded && !rowHasBeenExpanded }"
        type="primary"
        shape="circle"
        @click="toggleRow(expandable, expanded, record)"
        ><template #icon><ClusterOutlined /></template>
      </a-button>
    </template>
    <template #expandedRowRender="{ record }">
      <peripherals-table
        :gatewayId="record._id"
        :peripherals="record.peripherals"
        @refresh="refreshGateways"
      />
    </template>
    <template #headerCell="{ column }">
      <template v-if="column.key === 'actions'">
        <a-button
          type="primary"
          shape="circle"
          @click="createGatewayModalVisibility = true"
          class="create-gateway-button"
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
    <template #emptyText>
      <p>No gateway created yet</p>
      <a-button type="primary" @click="createGatewayModalVisibility = true"
        >Create gateway</a-button
      >
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
import PeripheralsTable from "./PeripheralsTable.vue";

import { Table, Popconfirm, Button } from "ant-design-vue";
import {
  DeleteOutlined,
  PlusOutlined,
  ClusterOutlined,
} from "@ant-design/icons-vue";
import "ant-design-vue/lib/table/style/css";
import "ant-design-vue/lib/popconfirm/style/css";

export default defineComponent({
  name: "GatewaysTable",
  components: {
    ATable: Table,
    AButton: Button,
    DeleteOutlined,
    APopconfirm: Popconfirm,
    PeripheralsTable,
    CreateGatewayModal,
    PlusOutlined,
    ClusterOutlined,
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
      peripheralsModalVisibility: false,
      expandedRows: [],
      rowHasBeenExpanded: false,
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

    const toggleRow = (
      expandable: boolean,
      expanded: boolean,
      record: Gateway
    ) => {
      if (!expandable) return;
      data.rowHasBeenExpanded = true;
      if (!expanded) {
        data.expandedRows.push(record.serialNumber);
      } else {
        data.expandedRows.splice(
          data.expandedRows.indexOf(record.serialNumber),
          1
        );
      }
    };

    refreshGateways();

    return {
      ...toRefs(data),
      onDeleteGateway,
      gatewayCreated,
      refreshGateways,
      toggleRow,
    };
  },
});
</script>

<style lang="scss">
.gateways-table {
  button.pulsation-button {
    animation: infinite-pulsation 1.5s 4;
  }
}
</style>
