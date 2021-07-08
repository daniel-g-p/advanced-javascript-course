const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
    let item = list.pop();
    if (item) {
        setTimeout(removeItemsFromList, 0);
    };
};