import GatewaysTable from "@/components/GatewaysTable.vue";
import { mount, flushPromises } from "@vue/test-utils";
import { Gateway } from "@/types";
import * as api from "@/composables/api";

const returnedGateways: Gateway[] = [
  {
    address: "127.0.0.1",
    serialNumber: "1234567890",
    label: "My Gateway",
    _id: "239847iwhfhg1238974wejkdfh2389",
    peripherals: [],
  },
  {
    address: "192.168.0.1",
    serialNumber: "019284675",
    label: "Another Gateway",
    _id: "385734iuf34789y6574fui348972",
    peripherals: [],
  },
];

jest
  .spyOn(api, "getGateways")
  .mockReturnValue(new Promise((resolve) => resolve(returnedGateways)));

describe("Testing GatewaysTable", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  it("rendered content per gateway", async () => {
    const wrapper = mount(GatewaysTable);
    await flushPromises();

    const rows = wrapper.findAll(".ant-table-row-level-0");
    expect(rows).toHaveLength(2);

    const firstRowCells = rows[0].findAll(".ant-table-cell");
    expect(firstRowCells).toHaveLength(5);

    expect(firstRowCells[1].text()).toBe(returnedGateways[0].serialNumber);
    expect(firstRowCells[2].text()).toBe(returnedGateways[0].label);
    expect(firstRowCells[3].text()).toBe(returnedGateways[0].address);

    const deleteButtons = wrapper.findAll(
      ".ant-btn.ant-btn-danger.ant-btn-circle.ant-btn-icon-only"
    );
    expect(deleteButtons).toHaveLength(2);

    const createButton = wrapper.findAll(
      ".ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only"
    );
    expect(createButton).toHaveLength(1);
  });
  it("renders popconfirm when clicks delete button", async () => {
    const wrapper = mount(GatewaysTable);
    await flushPromises();

    const deleteButtons = wrapper.findAll(
      ".ant-btn.ant-btn-danger.ant-btn-circle.ant-btn-icon-only"
    );
    deleteButtons[0].trigger("click");
    await flushPromises();
    const popConfirm = wrapper.get(".ant-popover.ant-popconfirm");
    expect(popConfirm.get(".ant-popover-message").text()).toBe(
      "Are you sure you want to delete this gateway?"
    );
  });
});
