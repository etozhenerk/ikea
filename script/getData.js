export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
        .then((response) => response.json())
        .then(process);
    },
    wishList(list, callBack) {
        this.get((data) => {
            const result = data.filter(item => list.includes(item.id));
            callBack(result);
        })
    },
    item(value, callBack) {
        this.get((data) => {
            const result = data.find(item => item.id === value);
            callBack(result);
        })
    }
};