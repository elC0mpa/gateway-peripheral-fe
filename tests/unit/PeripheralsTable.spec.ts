import PeripheralsTable from "@/components/PeripheralsTable.vue";
import { mount } from "@vue/test-utils";
import { Peripheral } from "@/types";
import { formatDate } from "@/composables/utils";

describe("Testing PeripheralsTable", () => {
  const peripherals: Peripheral[] = [
    {
      _id: "902348sdouf23908",
      vendor: "Huawei",
      gateway: "02348sjdfh",
      createdAt: new Date(),
      status: true,
      uid: 23,
    },
    {
      _id: "902348alhjsdf23908",
      vendor: "AT&T",
      gateway: "02348sjdfh",
      createdAt: new Date(),
      status: false,
      uid: 27,
    },
  ];

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

  it("rendered content per peripheral", async () => {
    const wrapper = mount(PeripheralsTable, {
      props: {
        peripherals,
        gatewayId: "02348sjdfh",
      },
    });

    const rows = wrapper.findAll(".ant-table-row-level-0");
    expect(rows).toHaveLength(2);

    const firstRowCells = rows[0].findAll(".ant-table-cell");
    expect(firstRowCells).toHaveLength(5);

    expect(firstRowCells[1].text()).toBe(peripherals[0].uid.toString());
    expect(firstRowCells[2].text()).toBe(peripherals[0].vendor);
    expect(firstRowCells[3].text()).toBe(
      formatDate(peripherals[0].createdAt.toString())
    );
    firstRowCells[0].get(".ant-switch-checked");

    const deleteButtons = wrapper.findAll(
      ".ant-btn.ant-btn-danger.ant-btn-circle.ant-btn-icon-only"
    );
    expect(deleteButtons).toHaveLength(2);

    const createButton = wrapper.findAll(
      ".ant-btn.ant-btn-primary.ant-btn-circle.ant-btn-icon-only"
    );
    expect(createButton).toHaveLength(1);
  });

  it("rendered content when there are no elements", async () => {
    const wrapper = mount(PeripheralsTable, {
      props: {
        peripherals: [],
        gatewayId: "02348sjdfh",
      },
    });

    const placeholderRow = wrapper.get("tr.ant-table-placeholder");
    const createButton = placeholderRow.get("button.ant-btn.ant-btn-primary");
    const text = placeholderRow.get("p");
    expect(createButton.text()).toBe("Create peripheral");
    expect(text.text()).toBe("No peripheral created yet");
  });
});
