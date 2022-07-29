<template>
  <a-table
    :columns="columns"
    :data-source="peripherals"
    :pagination="false"
    :loading="isLoading"
    :scroll="{
      x: 600,
    }"
    class="peripherals-table"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'createdAt'">
        {{ formatDate(record.createdAt) }}
      </template>
      <template v-if="column.key === 'actions'">
        <a-popconfirm
          title="Are you sure you want to delete this peripheral?"
          okType="danger"
          @confirm="onDeletePeripheral(record)"
        >
          <a-button type="danger" shape="circle">
            <template #icon><DeleteOutlined /></template>
          </a-button>
        </a-popconfirm>
      </template>
      <template v-if="column.key === 'status'">
        <a-switch
          v-model:checked="record.status"
          checked-children="ON"
          un-checked-children="OFF"
          :disabled="true"
        />
      </template>
    </template>
    <template #headerCell="{ column }">
      <template v-if="column.key === 'actions'">
        <a-button
          type="primary"
          shape="circle"
          @click="createPeripheralModalVisibility = true"
          ><template #icon><PlusOutlined /></template>
        </a-button>
        {{ column.title }}
      </template>
    </template>
    <template #emptyText>
      <p>No peripheral created yet</p>
      <a-button type="primary" @click="createPeripheralModalVisibility = true"
        >Create peripheral</a-button
      >
    </template>
  </a-table>
  <create-peripheral-modal
    :isVisible="createPeripheralModalVisibility"
    :gatewayId="gatewayId"
    @close="createPeripheralModalVisibility = false"
    @success="peripheralCreated"
  />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { deletePeripheral } from "../composables/api";
import { formatDate } from "@/composables/utils";
import { PeipheralsTableDataType } from "@/types/components";
import { openNotificationWithIcon } from "@/composables/utils";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import CreatePeripheralModal from "./CreatePeripheralModal.vue";

import { Table, Button, Switch, Popconfirm } from "ant-design-vue";
import "ant-design-vue/lib/table/style/css";
import "ant-design-vue/lib/popconfirm/style/css";
import "ant-design-vue/lib/switch/style/css";
import { Peripheral } from "@/types";

export default defineComponent({
  name: "PeripheralsTable",
  components: {
    ATable: Table,
    AButton: Button,
    PlusOutlined,
    DeleteOutlined,
    CreatePeripheralModal,
    ASwitch: Switch,
    APopconfirm: Popconfirm,
  },
  props: {
    peripherals: {
      type: Array,
      required: true,
    },
    gatewayId: {
      type: String,
      required: true,
    },
  },
  emits: ["refresh"],
  setup(props, ctx) {
    const data: PeipheralsTableDataType = reactive({
      columns: [
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
        },
        {
          title: "UID",
          dataIndex: "uid",
          key: "uid",
        },
        {
          title: "Vendor",
          dataIndex: "vendor",
          key: "vendor",
        },
        {
          title: "Created At",
          dataIndex: "createdAt",
          key: "createdAt",
        },
        {
          title: "Actions",
          key: "actions",
        },
      ],
      isLoading: false,
      createPeripheralModalVisibility: false,
    });

    const peripheralCreated = async () => {
      data.createPeripheralModalVisibility = false;
      ctx.emit("refresh");
    };

    const onDeletePeripheral = async (peripheral: Peripheral) => {
      try {
        data.isLoading = true;
        await deletePeripheral(peripheral._id);
        openNotificationWithIcon("success", "Peripheral succesfully deleted");
        ctx.emit("refresh");
      } catch (error) {
        console.log("Error while deleting gateway: ", error);
      } finally {
        data.isLoading = false;
      }
    };

    return {
      ...toRefs(data),
      props,
      peripheralCreated,
      onDeletePeripheral,
      formatDate,
    };
  },
});
</script>

<style lang="scss">
.peripherals-table {
  th.ant-table-cell {
    background-color: aliceblue;
  }
  table {
    border-bottom: 7px solid aliceblue;
  }
}
</style>
