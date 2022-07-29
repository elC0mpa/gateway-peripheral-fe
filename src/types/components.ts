import { Gateway } from "@/types";

export type GatewaysTableDataType = {
  columns: any[];
  gateways: Gateway[];
  isLoading: boolean;
  createGatewayModalVisibility: boolean;
  peripheralsModalVisibility: boolean;
  expandedRows: string[];
  rowHasBeenExpanded: boolean;
};

export type PeipheralsTableDataType = {
  columns: any[];
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
  uid: string;
  status: boolean;
  isLoading: boolean;
};
