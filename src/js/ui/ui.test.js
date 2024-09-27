import { getSelectedIds } from "../selectedIds/selectedIds";
import { createCheckboxes, updateCheckboxesStates, updateSelectedIds, createSelectedIds } from "./ui";

jest.mock("../selectedIds/selectedIds", () => ({
    getSelectedIds: jest.fn(),
}));

describe("ui functions", () => {
    let container;
    let checkboxes;
    let items;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);

        getSelectedIds.mockClear();
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    test("createCheckboxes", () => {
        const checkboxCount = 3;
        createCheckboxes(checkboxCount, container);
        checkboxes = container.querySelectorAll(".checkbox-input");

        expect(checkboxes.length).toBe(checkboxCount);
    });

    test("updateCheckboxesStates", () => {
        const checkboxCount = 3;
        createCheckboxes(checkboxCount, container);
        checkboxes = container.querySelectorAll(".checkbox-input");
        getSelectedIds.mockReturnValue(["1", "3"]);
        updateCheckboxesStates(checkboxes);

        expect(checkboxes[0].checked).toBe(true);
        expect(checkboxes[1].checked).toBe(false);
        expect(checkboxes[2].checked).toBe(true);
    });

    test("updateSelectedIds", () => {
        getSelectedIds.mockReturnValue(["1", "2"]);
        updateSelectedIds(container);
        items = container.querySelectorAll(".list_li");
        
        expect(items.length).toBe(2);
        expect(items[0].textContent).toBe("1) 1");
        expect(items[1].textContent).toBe("2) 2");
    });

    test("createSelectedIds", () => {
        const ids = ["1", "2", "3"];
        createSelectedIds(container, ids);
        const listItems = container.querySelectorAll(".list_li");

        expect(listItems.length).toBe(ids.length);
    });
});
