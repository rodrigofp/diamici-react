export default (inventories, { userId }) => {
    return inventories.filter((inventory) => { !userId || inventory.userId === userId; });
};