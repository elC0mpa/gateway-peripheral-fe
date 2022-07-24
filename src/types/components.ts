import { Gateway, Peripheral } from "@/types";

export type GatewaysTableDataType = {
  columns: any[];
  gateways: Gateway[];
  isLoading: boolean;
  createGatewayModalVisibility: boolean;
  peripheralsModalVisibility: boolean;
};

export type CreateGatewayModalType = {
  uniqueSerialNumber: string;
  label: string;
  address: string;
  isLoading: boolean;
};

export type PeripheralsModalType = {
  peripherals: Peripheral[];
  columns: any[];
  isLoading: boolean;
};
