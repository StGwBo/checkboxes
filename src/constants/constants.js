const selectedIds = document.querySelector(".checkbox-info__ids");
const checboxList = document.getElementById("container-checkbox");
const resetButton = document.getElementById("reset-button");
const copyUrlButton = document.getElementById("copy-url-button");
const checkboxes = () => document.querySelectorAll(".checkbox-input");

const EMPTY_STRING = "";

export { selectedIds, checboxList, resetButton, copyUrlButton, EMPTY_STRING, checkboxes };
