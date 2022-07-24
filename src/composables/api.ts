import { instance } from "../config/axios";
import { Gateway } from "../types";

export const getGateways = (): Promise<Gateway[]> => {
  return new Promise((resolve, reject) => {
    instance
      .get("gateway/")
      .then((response) => {
        const { data } = response;
        const { items } = data;
        resolve(items);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error.request);
        }
      });
  });
};

export const deleteGateway = (id: string): Promise<Gateway> => {
  return new Promise((resolve, reject) => {
    instance
      .delete(`gateway/${id}`)
      .then((response) => {
        const { data } = response;
        const { items } = data;
        resolve(items);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error.request);
        }
      });
  });
};

export const createGateway = (
  serialNumber: string,
  address: string,
  label: string
): Promise<Gateway> => {
  return new Promise((resolve, reject) => {
    instance
      .post("gateway/", {
        serialNumber,
        address,
        label,
      })
      .then((response) => {
        const { data } = response;
        const { items } = data;
        resolve(items);
      })
      .catch((error) => {
        if (error.response) {
          reject(error.response.data);
        } else if (error.request) {
          reject(error.request);
        }
      });
  });
};
