import { checkboxes, selectedIds } from "../../constants/constants";
import { addSelectedId, getSelectedIds } from "../selectedIds/selectedIds";
import { updateCheckboxesStates, updateSelectedIds } from "../ui/ui";
import { updateUrlParams, initializeFromUrl, processSelectedIds } from "./utils";

jest.mock("../selectedIds/selectedIds", () => ({
    addSelectedId: jest.fn(),
    getSelectedIds: jest.fn(),
}));

jest.mock("../ui/ui", () => ({
    updateCheckboxesStates: jest.fn(),
    updateSelectedIds: jest.fn(),
}));

describe("utils functions", () => {
    test("updateUrlParams", () => {
        getSelectedIds.mockReturnValue(["2", "3", "4"]);
        updateUrlParams();
        const url = new URL(window.location);

        expect(url.searchParams.get("selectedIds")).toBe("2,3,4");
    });

    test("processSelectedIds", () => {
        processSelectedIds("1,2,3");

        expect(addSelectedId).toHaveBeenCalledWith("1");
        expect(addSelectedId).toHaveBeenCalledWith("2");
        expect(addSelectedId).toHaveBeenCalledWith("3");
        expect(updateCheckboxesStates).toHaveBeenCalledWith(checkboxes());
        expect(updateSelectedIds).toHaveBeenCalledWith(selectedIds);
    });
});
