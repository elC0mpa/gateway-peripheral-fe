<template>
  <modal
    :visible="isVisible"
    :mask-closable="false"
    :confirm-loading="isLoading"
    title="Create Peripheral"
    @cancel="emitCloseEvent"
    @ok="onCreatePeripheral"
  >
    <a-input v-model:value="vendor" placeholder="Vendor" :allow-clear="true" />
    <hr />
    <div class="status-uid-container">
      <div>
        <span>UID:</span>
        <a-input-number v-model:value="uid" />
      </div>
      <div>
        <span>Status:</span>
        <a-switch
          v-model:checked="status"
          checked-children="ON"
          un-checked-children="OFF"
        />
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { CreatePeripheralModalType } from "@/types/components";
import { openNotificationWithIcon, getErrorMessage } from "@/composables/utils";
import { createPeripheral } from "@/composables/api";
import { Modal, Input, InputNumber, Switch } from "ant-design-vue";
import "ant-design-vue/lib/modal/style/css";
import "ant-design-vue/lib/input/style/css";
import "ant-design-vue/lib/switch/style/css";
import "ant-design-vue/lib/input-number/style/css";

export default defineComponent({
  name: "CreatePeripheralModal",
  components: {
    Modal,
    AInput: Input,
    AInputNumber: InputNumber,
    ASwitch: Switch,
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    gatewayId: {
      type: String,
      required: true,
    },
  },
  setup(props, ctx) {
    const data: CreatePeripheralModalType = reactive({
      vendor: "",
      uid: NaN,
      status: false,
      isLoading: false,
    });
    const emitCloseEvent = () => {
      data.vendor = "";
      data.uid = NaN;
      data.status = false;
      ctx.emit("close");
    };

    const onCreatePeripheral = async () => {
      try {
        data.isLoading = true;
        await createPeripheral(
          props.gatewayId,
          data.vendor,
          data.uid,
          data.status
        );
        openNotificationWithIcon("success", "Peripheral succesfully created");
        data.vendor = "";
        data.uid = NaN;
        data.status = false;
        ctx.emit("success");
      } catch (error) {
        const message = getErrorMessage(error);
        openNotificationWithIcon(
          "error",
          "Peripheral couldn´t be created",
          message
        );
      } finally {
        data.isLoading = false;
      }
    };
    return {
      props,
      emitCloseEvent,
      ...toRefs(data),
      onCreatePeripheral,
    };
  },
});
</script>

<style>
.status-uid-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

