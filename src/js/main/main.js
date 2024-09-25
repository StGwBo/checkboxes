import { selectedIds, checboxList, resetButton, copyUrlButton } from "../../constants/constants";
import { handleCopyUrl, handleDeleteIds, handleResetCheckboxes } from "../handlers/handlers";
import { createCheckboxes } from "../ui/ui";
import { initializeFromUrl } from "../utils/utils";

createCheckboxes(50, checboxList);

initializeFromUrl();

selectedIds.addEventListener("click", handleDeleteIds);
copyUrlButton.addEventListener("click", handleCopyUrl);
resetButton.addEventListener("click", handleResetCheckboxes);
