import Swiper from 'swiper'
import { FreeMode } from 'swiper/modules'
import * as functions from "./modules/functions.js";

functions.isWebp();

var swiper = new Swiper(".section2-swiper", {
    modules: [FreeMode],
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 10,
});