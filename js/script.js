"use strict";
import tabs from "./modules/tabs";
import modals from "./modules/modal";
import data from "./modules/data";
import cards from "./modules/cards";
import form from "./modules/form";
import slider from"./modules/slide";
import loader from "./modules/loader";
import accordion from"./modules/accordion";
import {openModal} from "./modules/modal"
window.addEventListener("DOMContentLoaded", () => {
  const modalTimer = setTimeout(() => {
    openModal(".modal", modalTimer);
  }, 50000);

    tabs();
    modals("[data-modal]", ".modal", modalTimer);
    data();
    cards();
    form(modalTimer);  
    slider();
    loader();
    accordion();
});

