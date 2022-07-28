<template>
  <modal
    :visible="isVisible"
    :mask-closable="false"
    :confirm-loading="data.isLoading"
    title="Create Peripheral"
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
        label="Vendor"
        name="vendor"
        :rules="[{ required: true, message: 'Vendor is required!' }]"
      >
        <a-input
          v-model:value="data.vendor"
          placeholder="Vendor"
          :allow-clear="true"
          :disabled="data.isLoading"
        />
      </a-form-item>
      <a-form-item
        label="UID"
        name="uid"
        :rules="[{ required: true, message: 'UID is required!' }]"
      >
        <a-input
          v-model:value="data.uid"
          placeholder="UID"
          type="number"
          :disabled="data.isLoading"
        />
      </a-form-item>
      <a-form-item label="Status" name="status">
        <a-switch
          v-model:checked="data.status"
          checked-children="ON"
          un-checked-children="OFF"
          :disabled="data.isLoading"
        />
      </a-form-item>
    </a-form>
  </modal>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { CreatePeripheralModalType } from "@/types/components";
import { openNotificationWithIcon, getErrorMessage } from "@/composables/utils";
import { createPeripheral } from "@/composables/api";
import { Modal, Input, Switch, Form, FormItem } from "ant-design-vue";
import type { FormInstance } from "ant-design-vue";
import "ant-design-vue/lib/modal/style/css";
import "ant-design-vue/lib/input/style/css";
import "ant-design-vue/lib/switch/style/css";
import "ant-design-vue/lib/input-number/style/css";
import "ant-design-vue/lib/form/style/css";

export default defineComponent({
  name: "CreatePeripheralModal",
  components: {
    Modal,
    AInput: Input,
    ASwitch: Switch,
    AForm: Form,
    AFormItem: FormItem,
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
    const formRef = ref<FormInstance>();
    const data: CreatePeripheralModalType = reactive({
      vendor: "",
      uid: "",
      status: false,
      isLoading: false,
    });
    const emitCloseEvent = () => {
      if (data.isLoading) return;
      formRef.value?.resetFields();
      ctx.emit("close");
    };

    const onCreatePeripheral = async () => {
      try {
        data.isLoading = true;
        await createPeripheral(
          props.gatewayId,
          data.vendor,
          Number(data.uid),
          data.status
        );
        openNotificationWithIcon("success", "Peripheral succesfully created");
        formRef.value?.resetFields();
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

    const fieldsValidation = async () => {
      try {
        await formRef.value?.validateFields();
        await onCreatePeripheral();
      } catch (error) {
        console.log("Validation error info: ", error);
      }
    };
    return {
      props,
      emitCloseEvent,
      data,
      formRef,
      fieldsValidation,
    };
  },
});
</script>

