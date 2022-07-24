export type Gateway = {
  serialNumber: string;
  label: string;
  address: string;
  _id: string;
};

export type Peripheral = {
  uid: number;
  vendor: string;
  createdAt: Date;
  status: boolean;
  _id: string;
};
