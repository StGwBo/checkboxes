let selectedIds = [];

const getSelectedIds = () => selectedIds;

const addSelectedId = (id) => {
    selectedIds.push(id);
};

const removeSelectedId = (id) => {
    selectedIds = selectedIds.filter((selectedId) => selectedId !== id.toString());
};

const resetSelectedIds = () => {
    selectedIds = [];
};

export { getSelectedIds, addSelectedId, removeSelectedId, resetSelectedIds };
