import { getData } from "./getData.js";

export const loadData = () => {
    const wishList = ["idd005", "idd100", "idd077", "idd03"];

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


    if(location.search){
        const search = decodeURI(location.search);
        const prop = search.split("=")[0].substring(1);
        const value = search.split("=")[1];

        if(prop === "s"){

        }else if(prop === "wishlist"){
            getData.wishList(wishList, (data) => console.log(data));
        }else {

        }
    }

    if(location.hash){
        getData.item(location.hash.substring(1), (data) => console.log(data));
    }

    if(location.pathname.includes("cart")){
        getData.cart(cartList, (data) => console.log(data));
    }
};