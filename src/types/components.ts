import { Gateway, Peripheral } from "@/types";

export type GatewaysTableDataType = {
  columns: any[];
  gateways: Gateway[];
  isLoading: boolean;
  createGatewayModalVisibility: boolean;
  peripheralsModalVisibility: boolean;
};

export type PeipheralsTableDataType = {
  columns: any[];
  peripherals: any[];
  isLoading: boolean;
  createPeripheralModalVisibility: boolean;
};

export type CreateGatewayModalType = {
  uniqueSerialNumber: string;
  label: string;
  address: string;
  isLoading: boolean;
};

export type CreatePeripheralModalType = {
  vendor: string;
  uid: number;
  status: boolean;
  isLoading: boolean;
};
