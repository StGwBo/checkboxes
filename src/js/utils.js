import { getSelectedIds } from "./selectedIds";

const updateUrlParams = () => {
    const url = new URL(window.location);
    const selectedIds = getSelectedIds();
    url.searchParams.set("selectedIds", selectedIds.join(","));
    window.history.pushState({}, "", url);
};

export { updateUrlParams };
