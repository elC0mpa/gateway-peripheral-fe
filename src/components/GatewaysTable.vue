<template>
  <a-table
    :columns="columns"
    :data-source="gateways"
    :pagination="false"
    :loading="isLoading"
    align="center"
  >
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
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { getGateways, deleteGateway } from "../composables/api";
import { GatewaysTableDataType } from "./GatewayTableTypes";
import { Gateway } from "../types";
import { Table } from "ant-design-vue";
import { Popconfirm } from "ant-design-vue";
import { Button } from "ant-design-vue";
import { notification } from "ant-design-vue";
import { DeleteOutlined } from "@ant-design/icons-vue";
import "ant-design-vue/lib/table/style/css";
import "ant-design-vue/lib/popconfirm/style/css";
import "ant-design-vue/lib/notification/style/css";

export default defineComponent({
  name: "GatewaysTable",
  components: {
    ATable: Table,
    AButton: Button,
    DeleteOutlined,
    APopconfirm: Popconfirm,
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

    const openNotificationWithIcon = (
      type: "success" | "error" | "warning",
      message: string,
      description: string = ""
    ) => {
      const options = {
        message,
        description,
      };
      type === "success"
        ? notification.success(options)
        : type === "warning"
        ? notification.warning(options)
        : notification.error(options);
    };
    refreshGateways();

    return {
      ...toRefs(data),
      onDeleteGateway,
    };
  },
});
</script>

