const getResource = async (url) => {
    const response = await fetch(url);

    if(!response.ok){
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`)
    }
    
    return await response.json();
}

getResource("./database/dataBase.json").then(data => console.log(data));