import { getData } from "./getData.js";

export const loadData = () => {


    const cartList = [
        {
            id: "idd015",
            const: 3,
        },
        {
            id: "idd045",
            const: 1,
        },
        {
            id: "idd095",
            const: 2,
        },
    ];




    if(location.hash){
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if(location.pathname.includes("cart")){
        getData.cart(cartList, (data) => console.log(data));
    }

    //getData.subCatalog("Декор", (data) =>console.log(data));
};