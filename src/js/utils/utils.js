import { checkboxes, selectedIds } from "../../constants/constants";
import { addSelectedId, getSelectedIds, removeSelectedId } from "../selectedIds/selectedIds";
import { updateCheckboxesStates, updateSelectedIds } from "../ui/ui";

const updateUrlParams = () => {
    const url = new URL(window.location);
    const selectedIds = getSelectedIds();
    url.searchParams.set("selectedIds", selectedIds.join(","));

    window.history.pushState({}, "", url);
};

const initializeFromUrl = () => {
    const url = new URL(window.location);
    const selectedFromUrl = url.searchParams.get("selectedIds");
    processSelectedIds(selectedFromUrl);
};

const processSelectedIds = (selectedFromUrl) => {
    if (selectedFromUrl) {
        selectedFromUrl.split(",").forEach((id) => addSelectedId(id));

        updateCheckboxesStates(checkboxes());
        updateSelectedIds(selectedIds);
    }
};

const toggleSelectedId = (checkbox, id) => {
    if (checkbox.checked) {
        addSelectedId(id);
    } else {
        removeSelectedId(id);
    }
};

export { updateUrlParams, initializeFromUrl, processSelectedIds, toggleSelectedId };
