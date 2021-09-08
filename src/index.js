import { Qwerty } from "./scripts/qwerty.js";
import { Dvorak } from "./scripts/dvorak.js";
import { Colemak } from "./scripts/colemak.js";
import { Korean } from "./scripts/korean.js";
import { renderKRQuote, charCount } from "./scripts/textkr.js";
import { alertBanner } from "./scripts/metrics.js";
import { renderNewQuote, wordCount } from "./scripts/texten.js";
import { resetTimer, startTimer } from "./scripts/metrics.js";
import { timerCheck, timerCheckKorean } from "./scripts/metrics.js";

const layout = document.getElementById("layoutChanger");
const layoutArrow = document.getElementById("layoutButton");

let currentLayout;
let layouts = [Korean, Dvorak, Colemak];
let layoutNames = ["korean", "dvorak", "colemak"];

window.addEventListener("DOMContentLoaded", function () {
    currentLayout = layouts[0];
    currentLayout.init();

    layout.innerText = layoutNames[0];
    // renderNewQuote();
    renderKRQuote();
    resetTimer();

    layoutArrow.addEventListener("click", () => {
        layouts.push(layouts.shift());
        layoutNames.push(layoutNames.shift());
        layout.innerText = layoutNames[0];
        currentLayout.elements.main.style.display = "none";
        currentLayout = layouts[0];
        currentLayout.init();

        keys = document.querySelectorAll(".keys");
        spaceKey = document.querySelector(".spacebar");
        backspace = document.querySelector(".backspace_key");
        shiftLeft = document.querySelector(".shift_left");
        shiftRight = document.querySelector(".shift_right");
        capsLockKey = document.querySelector(".capslock_key");
        winKey = document.querySelector(".win_key");

        for (let i = 0; i < keys.length; i++) {
            keys[i].setAttribute("keyname", keys[i].innerText);
        }
    })

    const textDisplayElement = document.getElementById("textDisplay");
    // const timerElement = document.getElementById("timer");

    let keys = document.querySelectorAll(".keys");
    let spaceKey = document.querySelector(".spacebar");
    let backspace = document.querySelector(".backspace_key");
    let shiftLeft = document.querySelector(".shift_left");
    let shiftRight = document.querySelector(".shift_right");
    let capsLockKey = document.querySelector(".capslock_key");
    let winKey = document.querySelector(".win_key");
    let textInput = document.querySelector(".text_input");
    let refreshButton = document.querySelector(".refresh");

    let typeStart = false;
    let timer;

    for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute("keyname", keys[i].innerText);
    }

    textInput.addEventListener('input', () => {
        const arrQuote = textDisplayElement.querySelectorAll("span");
        const arrVal = textInput.value.split("");
        
        if (!typeStart) {
            typeStart = true;
            alertBanner.innerText = "";
            timer = setInterval(startTimer, 1000);
        }
        
        let correct = true;
        arrQuote.forEach((charSpan, i) => {
            const char = arrVal[i];
            if (char == null) {
                charSpan.classList.remove("correct");
                charSpan.classList.remove("incorrect");
                correct = false;
            } else if (char === charSpan.innerText) {
                charSpan.classList.add("correct");
                charSpan.classList.remove("incorrect");
            } else {
                charSpan.classList.remove("correct");
                charSpan.classList.add("incorrect");
                correct = false;
            }
        })
        
        if (correct) {
            typeStart = false;
            // renderNewQuote();
            renderKRQuote();
            clearInterval(timer);
            timerCheckKorean(charCount);
        }
    })


    refreshButton.addEventListener("click", () => {
        typeStart = false;
        // renderNewQuote();
        renderKRQuote();
        clearInterval(timer);
        textInput.focus();
    })

    window.addEventListener("keydown", function(e) {
        for (let i = 0; i < keys.length; i++) {
            if (e.key === keys[i].getAttribute("keyname") || e.key === keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.add("active");
            }
            if (e.code === "Backspace") {
                backspace.classList.add("active");
            }
            if (e.code === "Space") {
                spaceKey.classList.add("active");
            }
            if (e.code === "ShiftLeft") {
                shiftRight.classList.remove("active");
            }
            if (e.code === "ShiftRight") {
                shiftLeft.classList.remove("active");
            }
            if (e.code === "CapsLock") {
                capsLockKey.classList.toggle("active");
            }
            if (e.code === "MetaLeft") {
                winKey.classList.add("active");
            }
        }
    })

    window.addEventListener("keyup", function(e) {
        for (let i = 0; i < keys.length; i++) {
            if (e.key === keys[i].getAttribute("keyname") || e.key === keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.remove("active");
                keys[i].classList.add("remove");
            }
            if (e.code === "Backspace") {
                backspace.classList.remove("active");
                backspace.classList.add("remove");
            }
            if (e.code === "Space") {
                spaceKey.classList.remove("active");
                spaceKey.classList.add("remove");
            }
            if (e.code === "ShiftLeft") {
                shiftRight.classList.remove("active");
                shiftRight.classList.remove("remove");
            }
            if (e.code === "ShiftRight") {
                shiftLeft.classList.remove("active");
                shiftLeft.classList.remove("remove");
            }
            if (e.code === "MetaLeft") {
                winKey.classList.remove("active");
            }
            this.setTimeout(() => {
                keys[i].classList.remove("remove");
            }, 200)
        }
    })
})