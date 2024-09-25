import { checkboxes, selectedIds } from "../../constants/constants";
import { removeSelectedId, resetSelectedIds } from "../selectedIds/selectedIds";
import { updateCheckboxesStates, updateSelectedIds } from "../ui/ui";
import { toggleSelectedId, updateUrlParams } from "../utils/utils";

const handleResetCheckboxes = () => {
    resetSelectedIds();
    updateSelectedIds(selectedIds);
    updateUrlParams();
    updateCheckboxesStates(checkboxes());
};

const handleCopyUrl = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl);
};

const handleDeleteIds = (event) => {
    const id = event.target.value;

    removeSelectedId(id);
    updateSelectedIds(selectedIds);
    updateUrlParams();
    updateCheckboxesStates(checkboxes());
};

const handleCheckbox = (event) => {
    const checkbox = event.target;
    const id = checkbox.value;

    toggleSelectedId(checkbox, id);
    updateSelectedIds(selectedIds);
    updateUrlParams();
};

export { handleResetCheckboxes, handleCopyUrl, handleDeleteIds, handleCheckbox };
