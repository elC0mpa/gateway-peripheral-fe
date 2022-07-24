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
