import { addSelectedId, getSelectedIds, removeSelectedId, resetSelectedIds } from "./selectedIds";

describe("selectedIds functions", () => {
    beforeEach(() => {
        resetSelectedIds();
    });

    test("getSelectedIds", () => {
        expect(getSelectedIds()).toEqual([]);
    });

    test("addSelectedId", () => {
        addSelectedId("1");
        addSelectedId("2");
        
        expect(getSelectedIds()).toEqual(["1", "2"]);
    });

    test("removeSelectedId", () => {
        addSelectedId("1");
        addSelectedId("2");
        removeSelectedId("3");

        expect(getSelectedIds()).toEqual(["1", "2"]);
    });

    test("resetSelectedIds", () => {
        addSelectedId("1");
        addSelectedId("2");
        resetSelectedIds();

        expect(getSelectedIds()).toEqual([]);
    });
});
