export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
        .then((response) => response.json())
        .then(process);
    }
};