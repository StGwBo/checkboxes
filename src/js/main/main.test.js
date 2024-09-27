import { handleCopyUrl, handleDeleteIds, handleResetCheckboxes } from "../handlers/handlers";
import { createCheckboxes } from "../ui/ui";
import { initializeFromUrl } from "../utils/utils";

jest.mock("../ui/ui", () => ({
    createCheckboxes: jest.fn(),
}));

jest.mock("../handlers/handlers", () => ({
    handleCopyUrl: jest.fn(),
    handleDeleteIds: jest.fn(),
    handleResetCheckboxes: jest.fn(),
}));

jest.mock("../utils/utils", () => ({
    initializeFromUrl: jest.fn(),
}));

describe("main", () => {
    let selectedIds;
    let resetButton;
    let copyUrlButton;
    let checboxList;

    beforeEach(() => {
        document.body.innerHTML = `
        <div class="checkbox-info__ids"></div>
        <div id="container-checkbox"></div>
        <button id="reset-button">Reset</button>
        <button id="copy-url-button">Copy URL</button>
    `;
        selectedIds = document.querySelector(".checkbox-info__ids");
        checboxList = document.getElementById("container-checkbox");
        resetButton = document.getElementById("reset-button");
        copyUrlButton = document.getElementById("copy-url-button");

        createCheckboxes(50, checboxList);
        initializeFromUrl();

        selectedIds.addEventListener("click", handleDeleteIds);
        copyUrlButton.addEventListener("click", handleCopyUrl);
        resetButton.addEventListener("click", handleResetCheckboxes);
    });

    test("createCheckboxes", () => {
        expect(createCheckboxes).toHaveBeenCalledWith(50, checboxList);
    });

    test("initializeFromUrl", () => {
        expect(initializeFromUrl).toHaveBeenCalled();
    });

    test("clicked handleDeleteIds", () => {
        selectedIds.click();
        
        expect(handleDeleteIds).toHaveBeenCalled();
    });

    test("clicked handleCopyUrl", () => {
        copyUrlButton.click();

        expect(handleCopyUrl).toHaveBeenCalled();
    });

    test("clicked handleResetCheckboxes", () => {
        resetButton.click();

        expect(handleResetCheckboxes).toHaveBeenCalled();
    });
});
