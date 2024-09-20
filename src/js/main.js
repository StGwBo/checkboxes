import {
    SELECTED_IDS,
    CHECKBOX_LIST,
    RESET_BUTTON,
    COPY_URL_BUTTON,
    DEFAULT_EMPTY_STRING,
} from "../constants/constants";

export let selectedIds = [];

const createCheckboxes = (count) => {
    for (let i = 1; i <= count; i++) {
        const div = document.createElement("div");
        div.classList.add("checkbox-wrapper");

        const checkbox = document.createElement("input");
        checkbox.classList.add("checkbox-input");

        checkbox.type = "checkbox";
        checkbox.id = i;
        checkbox.value = i;

        const label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.textContent = `Чекбокс ${i}`;

        div.appendChild(checkbox);
        div.appendChild(label);
        CHECKBOX_LIST.appendChild(div);
    }
};
createCheckboxes(50);

const updateSelectedIds = () => {
    SELECTED_IDS.innerHTML = DEFAULT_EMPTY_STRING;
    selectedIds.forEach((id, index) => {
        const li = document.createElement("li");
        li.classList.add("list_li");

        li.textContent = `${index + 1}) ${id}`;
        SELECTED_IDS.appendChild(li);
    });
};

const updateUrlParams = () => {
    const url = new URL(window.location);
    url.searchParams.set("selectedIds", selectedIds.join(","));
    window.history.pushState({}, "", url);
};

const handleCheckbox = (event) => {
    const checkbox = event.target;
    const id = checkbox.value;

    if (checkbox.checked) {
        selectedIds.push(id);
    } else {
        selectedIds = selectedIds.filter((selectedId) => selectedId !== id);
    }

    updateSelectedIds();
    updateUrlParams();
};

const updateUrlDidMount = () => {
    const url = new URL(window.location);
    const selectedFromUrl = url.searchParams.get("selectedIds");

    if (selectedFromUrl) {
        selectedIds = selectedFromUrl.split(",");
        const checkboxes = document.querySelectorAll(".checkbox-input");

        checkboxes.forEach((checkbox) => {
            if (selectedIds.includes(checkbox.value)) {
                checkbox.checked = true;
            }
        });
    }
    updateSelectedIds();
};

const handleResetCheckbox = () => {
    const checkboxes = document.querySelectorAll(".checkbox-input");
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    selectedIds = [];
    updateSelectedIds();
    updateUrlParams();
};

const handleCopyUrl = () => {
    const currentUrl = window.location.href;

    navigator.clipboard.writeText(currentUrl);
};

const handleDeleteIds = (event) => {
    if (event.target.tagName === "LI") {
        const id = event.target.textContent;
        selectedIds = selectedIds.filter((selectedId) => selectedId !== id);

        event.target.remove();

        updateUrlParams();
    }
};

SELECTED_IDS.addEventListener("click", handleDeleteIds);
COPY_URL_BUTTON.addEventListener("click", handleCopyUrl);
RESET_BUTTON.addEventListener("click", handleResetCheckbox);

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".checkbox-input");
    checkboxes.forEach((checkbox) => checkbox.addEventListener("click", handleCheckbox));

    updateUrlDidMount();
});

export { createCheckboxes, handleCheckbox };
