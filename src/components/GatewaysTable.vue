<template>
  <Table
    :columns="columns"
    :data-source="gateways"
    :pagination="false"
    align="center"
  ></Table>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { getGateways } from "../composables/api";
import { GatewaysTableDataType } from "./GatewayTableTypes";
import { Table } from "ant-design-vue";
import "ant-design-vue/lib/table/style/css";

export default defineComponent({
  name: "GatewaysTable",
  components: {
    Table,
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
      ],
      gateways: [],
    });

    getGateways()
      .then((gateways: Gateway[]) => {
        data.gateways = gateways;
      })
      .catch((error) => {
        console.error("error: ", error);
      });
    return {
      ...toRefs(data),
    };
  },
});
</script>

