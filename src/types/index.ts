export type Gateway = {
  serialNumber: string;
  label: string;
  address: string;
  _id: string;
  peripherals: Peripheral[];
};

export type Peripheral = {
  uid: number;
  vendor: string;
  createdAt: Date;
  status: boolean;
  _id: string;
  gateway: string;
};
