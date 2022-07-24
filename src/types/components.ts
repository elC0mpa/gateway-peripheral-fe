import { Gateway } from "@/types";

export type GatewaysTableDataType = {
  columns: any[];
  gateways: Gateway[];
  isLoading: boolean;
  createGatewayModalVisibility: boolean;
};

export type CreateGatewayModalType = {
  uniqueSerialNumber: string;
  label: string;
  address: string;
  isLoading: boolean;
};
