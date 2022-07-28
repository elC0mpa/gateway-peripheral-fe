export const ipAddressValidation = (_: any, value: string) => {
  if (/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(new Error("This is not a valid IP Address"));
};
