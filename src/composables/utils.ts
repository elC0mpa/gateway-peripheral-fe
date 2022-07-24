import { notification } from "ant-design-vue";
import "ant-design-vue/lib/notification/style/css";
export const openNotificationWithIcon = (
  type: "success" | "error" | "warning",
  message: string,
  description = ""
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

export const getErrorMessage = (error: any): string => {
  const errorMsgs: string[] = [];
  if (error.error.errors) {
    const { errors } = error.error;
    Object.keys(errors).forEach((errorKey) => {
      errorMsgs.push(errors[errorKey].message);
    });
  }
  if (error.error.code === 11000) {
    errorMsgs.push("Serial Number must be unique");
  }
  return errorMsgs.join("\n");
};
