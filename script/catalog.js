import { getData } from "./getData.js";
import { generateSubCatalog } from "./generateSubCatalog.js";

export const catalog = () => {
    const updateSubcatalog = generateSubCatalog();

    const btBnurger = document.querySelector(".btn-burger");
    const catalog = document.querySelector(".catalog");
    const btnClose = document.querySelector(".btn-close");
    const subCatalog = document.querySelector(".subcatalog");
    const subCatalogHeader = document.querySelector(".subcatalog-header");
    const btnReturn = document.querySelector(".btn-return");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.insertAdjacentElement("beforeend", overlay);

    const openMenu = () => {
        catalog.classList.add("open");
        overlay.classList.add("active");
    };
    const closeMenu = () => {
        catalog.classList.remove("open");
        overlay.classList.remove("active");
        closeSubMenu();
    };
    const openSubMenu = (e) => {
        e.preventDefault();
        const target = e.target;
        const itemList = target.closest(".catalog-list__item");
        if (itemList) {
            getData.subCatalog(target.textContent, (data) => {
                updateSubcatalog(target.textContent, data);
                subCatalog.classList.add("subopen");
            });
        }
    };

    const closeSubMenu = () => {
        subCatalog.classList.remove("subopen");
    };

    btBnurger.addEventListener("click", openMenu);
    btnClose.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    catalog.addEventListener("click", openSubMenu);
    subCatalog.addEventListener("click", (e) => {
        const btnReturn = e.target.closest(".btn-return");
        if(btnReturn) closeSubMenu();
    });
};
