import { getSelectedIds } from "../selectedIds/selectedIds";
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
    beforeEach(() => {
        window.history.pushState({}, "", "http://localhost");
        jest.clearAllMocks();
    });

    test("updateUrlParams", () => {
        getSelectedIds.mockReturnValue(["1", "2", "3"]);

        updateUrlParams();

        const url = new URL(window.location);
        expect(url.searchParams.get("selectedIds")).toBe("1,2,3");
        expect(url.searchParams.get("selectedIds")).not.toBe(1, 2, 3);
    });

    test("initializeFromUrl", () => {
        window.history.pushState({}, "", "http://localhost?selectedIds=1,2,3");

        initializeFromUrl();

        expect(getSelectedIds()).toEqual(["1", "2", "3"]);
        expect(getSelectedIds()).not.toEqual(["1", "9", "3"]);
    });
    test("processSelectedIds", () => {
        processSelectedIds("1", "2", "3");

        expect(getSelectedIds()).toEqual(["1", "2", "3"]);
    });
});
