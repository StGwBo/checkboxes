import { checkboxes, EMPTY_STRING } from "../constants/constants";
import { handleCheckbox } from "./handlers";
import { getSelectedIds } from "./selectedIds";

const createCheckboxes = (count, container) => {
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
        container.appendChild(div);

        checkbox.addEventListener("click", handleCheckbox);
    }
};

const updateCheckboxesStates = (checkboxes) => {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = getSelectedIds().includes(checkbox.value);
    });
};

const updateSelectedIds = (container) => {
    container.innerHTML = EMPTY_STRING;
    const selectedIds = getSelectedIds();
    createSelectedIds(container, selectedIds);
};

const createSelectedIds = (container, ids) => {
    ids.forEach((id, index) => {
        const li = document.createElement("li");
        li.classList.add("list_li");
        li.value = id;
        li.textContent = `${index + 1}) ${id}`;
        container.appendChild(li);
    });
};

export { createCheckboxes, updateCheckboxesStates, updateSelectedIds };
