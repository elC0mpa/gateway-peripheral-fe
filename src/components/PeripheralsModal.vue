<template>
  <modal
    :visible="isVisible"
    title="Peripherals"
    width="100%"
    @cancel="emitCloseEvent"
    @ok="emitCloseEvent"
  >
    <a-table
      :columns="columns"
      :data-source="peripherals"
      :pagination="false"
      :loading="isLoading"
      align="center"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'actions'">
          <a-button type="primary" shape="circle" @click="onCreatePeripheral"
            ><template #icon><PlusOutlined /></template>
          </a-button>
          {{ column.title }}
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="['uid, vendor'].includes(column.key)">
          <div>
            <a-input v-model:value="peripherals[0][column.dataIndex]" />
            <!-- <template v-else> -->
            <!--   {{ text }} -->
            <!-- </template> -->
          </div>
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
      </template>
    </a-table>
  </modal>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { PeripheralsModalType } from "@/types/components";
import { Table, Popconfirm, Button, Input, Modal } from "ant-design-vue";
import { openNotificationWithIcon } from "@/composables/utils";
import { getPeripherals, deletePeripheral } from "@/composables/api";
import "ant-design-vue/lib/modal/style/css";
import "ant-design-vue/lib/input/style/css";
import "ant-design-vue/lib/table/style/css";
import "ant-design-vue/lib/popconfirm/style/css";
import { Peripheral } from "@/types";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "CreateGatewayModal",
  components: {
    Modal,
    AInput: Input,
    ATable: Table,
    DeleteOutlined,
    PlusOutlined,
    AButton: Button,
    APopconfirm: Popconfirm,
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const data: PeripheralsModalType = reactive({
      isLoading: true,
      peripherals: [],
      columns: [
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
          title: "Creation Date",
          dataIndex: "createdAt",
          key: "date",
        },
        {
          title: "Actions",
          key: "actions",
        },
      ],
    });

    const emitCloseEvent = () => {
      ctx.emit("close");
    };

    const refreshPeripherals = async () => {
      console.log("Peripherals: ");
      try {
        data.isLoading = true;
        data.peripherals = await getPeripherals();
      } catch (error) {
        console.log("Error while getting peripherals");
      } finally {
        data.isLoading = false;
      }
    };

    const onDeletePeripheral = async (peripheral: Peripheral) => {
      try {
        data.isLoading = true;
        await deletePeripheral(peripheral._id);
        openNotificationWithIcon("success", "Peripheral succesfully deleted");
        await refreshPeripherals();
      } catch (error) {
        console.log("Error while deleting peripheral: ", error);
      } finally {
        data.isLoading = false;
      }
    };

    const onCreatePeripheral = () => {
      data.peripherals.unshift({
        _id: "-1",
        status: false,
        uid: NaN,
        vendor: "",
        createdAt: new Date(),
      });
    };
    refreshPeripherals();

    return {
      props,
      emitCloseEvent,
      ...toRefs(data),
      onDeletePeripheral,
      onCreatePeripheral,
    };
  },
});
</script>

<style>
</style>

