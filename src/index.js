import { renderNewQuote } from "./scripts/text.js";
import { Qwerty } from "./scripts/qwerty.js";

window.addEventListener("DOMContentLoaded", function () {
    Qwerty.init();
    renderNewQuote();
})
