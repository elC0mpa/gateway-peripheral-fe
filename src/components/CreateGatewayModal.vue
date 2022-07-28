<template>
  <modal
    :visible="isVisible"
    :mask-closable="false"
    :confirm-loading="data.isLoading"
    title="Create Gateway"
    @cancel="emitCloseEvent"
    @ok="fieldsValidation"
  >
    <a-form
      :model="data"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      name="form_in_modal"
      ref="formRef"
    >
      <a-form-item
        label="Serial Number"
        name="uniqueSerialNumber"
        :rules="[{ required: true, message: 'Serial Number is required!' }]"
      >
        <a-input
          v-model:value="data.uniqueSerialNumber"
          placeholder="Serial Number"
          :allow-clear="true"
          :disabled="data.isLoading"
        />
      </a-form-item>
      <a-form-item
        label="Label"
        name="label"
        :rules="[{ required: true, message: 'Label is required!' }]"
      >
        <a-input
          v-model:value="data.label"
          placeholder="Label"
          :allow-clear="true"
          :disabled="data.isLoading"
        />
      </a-form-item>
      <a-form-item
        label="IP Address"
        name="address"
        :rules="[
          { required: true, message: 'IP Address is required!' },
          { validator: ipAddressValidation },
        ]"
      >
        <a-input
          v-model:value="data.address"
          placeholder="IP Address"
          :allow-clear="true"
          :disabled="data.isLoading"
        />
      </a-form-item>
    </a-form>
  </modal>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { CreateGatewayModalType } from "@/types/components";
import { openNotificationWithIcon, getErrorMessage } from "@/composables/utils";
import { ipAddressValidation } from "@/composables/validations";
import { createGateway } from "@/composables/api";
import { Modal, Input, Form, FormItem } from "ant-design-vue";
import type { FormInstance } from "ant-design-vue";
import "ant-design-vue/lib/modal/style/css";
import "ant-design-vue/lib/input/style/css";
import "ant-design-vue/lib/form/style/css";

export default defineComponent({
  name: "CreateGatewayModal",
  components: {
    Modal,
    AInput: Input,
    AForm: Form,
    AFormItem: FormItem,
  },
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, ctx) {
    const formRef = ref<FormInstance>();
    const data = reactive<CreateGatewayModalType>({
      uniqueSerialNumber: "",
      address: "",
      label: "",
      isLoading: false,
    });
    const emitCloseEvent = () => {
      if (data.isLoading) return;
      formRef.value?.resetFields();
      ctx.emit("close");
    };
    const onCreateGateway = async () => {
      try {
        data.isLoading = true;
        await createGateway(data.uniqueSerialNumber, data.address, data.label);
        openNotificationWithIcon("success", "Gateway succesfully created");
        formRef.value?.resetFields();
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

    const fieldsValidation = async () => {
      try {
        await formRef.value?.validateFields();
        await onCreateGateway();
      } catch (error) {
        console.log("Validation error info: ", error);
      }
    };
    return {
      props,
      emitCloseEvent,
      data,
      fieldsValidation,
      formRef,
      ipAddressValidation,
    };
  },
});
</script>

<style>
</style>
