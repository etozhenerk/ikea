export const userData = {
    wishListData: [],
    cartListData: [
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
    ],

    get wishList() {
        return this.wishListData;
    },
    set wishList(id) {
        if (this.wishListData.includes(id)) {
            const index = this.wishListData.indexOf(id);
            this.wishListData.splice(index, 1);
        } else {
            this.wishListData.push(id);
        }
    },
};
