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
import { Table } from "ant-design-vue";
import "ant-design-vue/lib/table/style/css";

export default defineComponent({
  name: "GatewaysTable",
  components: {
    Table,
  },
  setup() {
    const data = reactive({
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
    return {
      ...toRefs(data),
    };
  },
});
</script>

