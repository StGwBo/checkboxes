import { selectedIds, checboxList, resetButton, copyUrlButton, checkboxes } from "../constants/constants";
import { handleCopyUrl, handleDeleteIds, handleResetCheckboxes } from "./handlers";
import { addSelectedId } from "./selectedIds";
import { createCheckboxes, updateCheckboxesStates, updateSelectedIds } from "./ui";

createCheckboxes(50, checboxList);

const updateUrlDidMount = () => {
    const url = new URL(window.location);
    const selectedFromUrl = url.searchParams.get("selectedIds");
    console.log(selectedFromUrl);

    if (selectedFromUrl) {
        selectedFromUrl.split(",").forEach((id) => addSelectedId(id));

        updateCheckboxesStates(checkboxes());
        updateSelectedIds(selectedIds);
    }
};
updateUrlDidMount();

selectedIds.addEventListener("click", handleDeleteIds);
copyUrlButton.addEventListener("click", handleCopyUrl);
resetButton.addEventListener("click", handleResetCheckboxes);
