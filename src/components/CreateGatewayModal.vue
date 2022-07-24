<template>
  <modal
    :visible="isVisible"
    :mask-closable="false"
    :confirm-loading="isLoading"
    title="Create Gateway"
    @cancel="emitCloseEvent"
    @ok="onCreateGateway"
  >
    <a-input
      v-model:value="uniqueSerialNumber"
      placeholder="Serial Number"
      :allow-clear="true"
    />
    <hr />
    <a-input v-model:value="label" placeholder="Label" :allow-clear="true" />
    <hr />
    <a-input
      v-model:value="address"
      placeholder="IP Address"
      :allow-clear="true"
    />
  </modal>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { CreateGatewayModalType } from "@/types/components";
import { openNotificationWithIcon, getErrorMessage } from "@/composables/utils";
import { createGateway } from "@/composables/api";
import { Modal, Input } from "ant-design-vue";
import "ant-design-vue/lib/modal/style/css";
import "ant-design-vue/lib/input/style/css";

export default defineComponent({
  name: "CreateGatewayModal",
  components: {
    Modal,
    AInput: Input,
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const data: CreateGatewayModalType = reactive({
      uniqueSerialNumber: "",
      address: "",
      label: "",
      isLoading: false,
    });
    const emitCloseEvent = () => {
      data.uniqueSerialNumber = "";
      data.label = "";
      data.address = "";
      ctx.emit("close");
    };
    const onCreateGateway = async () => {
      try {
        data.isLoading = true;
        await createGateway(data.uniqueSerialNumber, data.address, data.label);
        openNotificationWithIcon("success", "Gateway succesfully created");
        data.uniqueSerialNumber = "";
        data.label = "";
        data.address = "";
        ctx.emit("success");
      } catch (error) {
        const message = getErrorMessage(error);
        openNotificationWithIcon(
          "error",
          "Gateway couldn´t be created",
          message
        );
      } finally {
        data.isLoading = false;
      }
    };
    return {
      props,
      emitCloseEvent,
      onCreateGateway,
      ...toRefs(data),
    };
  },
});
</script>

<style>
</style>
