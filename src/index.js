import { Qwerty } from "./scripts/qwerty.js";
import { Dvorak } from "./scripts/dvorak.js";
import { Colemak } from "./scripts/colemak.js";
import { Korean } from "./scripts/korean.js";
import { renderKRQuote, charCount } from "./scripts/textkr.js";
import { alertBanner } from "./scripts/metrics.js";
import { renderNewQuote, wordCount } from "./scripts/texten.js";
import { resetTimer, startTimer } from "./scripts/metrics.js";
import { timerCheck, timerCheckKorean } from "./scripts/metrics.js";

let currentLayout;
let layouts = [Colemak, Korean, Dvorak];
let layoutNames = ["colemak", "korean", "dvorak"];
layouts.forEach(layout => {
    layout.init();
})

// Layout changing elements
const layout = document.getElementById("layoutChanger");
const layoutArrow = document.querySelectorAll(".layout_button");

layoutArrow.forEach(arrow => {
    arrow.addEventListener("click", () => {
        layouts.push(layouts.shift());
        layoutNames.push(layoutNames.shift());
        currentLayout.elements.main.style.display = "none";
        layout.innerText = layoutNames[0];
        currentLayout = layouts[0];
        currentLayout.elements.main.style.display = "block";
        if (layout.innerText === "korean") {
            renderKRQuote();
        } else {
            renderNewQuote();
        }
    })
})

window.addEventListener("DOMContentLoaded", function () {
    currentLayout = layouts[0];

    if (currentLayout) currentLayout.elements.main.style.display = "block";
    layout.innerText = layoutNames[0];

    if (layout.innerText === "korean") {
        renderKRQuote();
    } else {
        renderNewQuote();
    }
    
    resetTimer();

    const textDisplayElement = document.getElementById("textDisplay");

    let keys = document.querySelectorAll(".keys");
    let spaceKey = document.querySelector(".spacebar");
    let backspace = document.querySelector(".backspace_key");
    let shiftLeft = document.querySelector(".shift_left");
    let shiftRight = document.querySelector(".shift_right");
    let capsLockKey = document.querySelector(".capslock_key");
    let altKeys = document.querySelectorAll(".alt_key");
    let ctrlKeys = document.querySelectorAll(".ctrl_key");
    let enterKey = document.querySelector(".enter_key");
    let tabKey = document.querySelector(".tab_key");
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
            if (layout.innerText === "korean") {
                renderKRQuote();
            } else {
                renderNewQuote();
            }
            clearInterval(timer);
            if (layout.innerText === "korean") {
                timerCheckKorean(charCount);
            } else {
                timerCheck(wordCount);
            }
        }
    })


    refreshButton.addEventListener("click", () => {
        typeStart = false;
        if (layout.innerText === "korean") {
            renderKRQuote();
        } else {
            renderNewQuote();
        }
        alertBanner.innerText = "";
        clearInterval(timer);
        textInput.focus();
    })

    window.addEventListener("keydown", function(e) {
        console.log(e.code)
        for (let i = 0; i < keys.length; i++) {
            if (e.key === keys[i].getAttribute("keyname") || e.key === keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.add("active");
            }
            if (e.code === "Backspace") {
                backspace.classList.add("active");
            }
            if (e.code === "Tab") {
                tabKey.classList.add("active");
            }
            if (e.code === "Enter") {
                enterKey.classList.add("active");
            }
            if (e.code === "Space") {
                spaceKey.classList.add("active");
            }
            if (e.code === "ShiftLeft") {
                shiftLeft.classList.add("active");
                shiftRight.classList.remove("active");
            }
            if (e.code === "ShiftRight") {
                shiftRight.classList.add("active");
                shiftLeft.classList.remove("active");
            }
            if (e.code === "ControlLeft" || e.code === "ControlRight") {
                ctrlKeys.forEach(key => {
                    key.classList.add("active");
                })
            }
            if (e.code === "AltLeft" || e.code === "AltRight") {
                altKeys.forEach(key => {
                    key.classList.add("active");
                })
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
            if (e.code === "Tab") {
                tabKey.classList.remove("active");
                tabKey.classList.add("remove");
            }
            if (e.code === "Enter") {
                enterKey.classList.remove("active");
                enterKey.classList.add("remove");
            }
            if (e.code === "Space") {
                spaceKey.classList.remove("active");
                spaceKey.classList.add("remove");
            }
            if (e.code === "ShiftLeft") {
                shiftLeft.classList.remove("active");
                shiftLeft.classList.add("remove");
            }
            if (e.code === "ShiftRight") {
                shiftRight.classList.remove("active");
                shiftRight.classList.add("remove");
            }
            if (e.code === "ControlLeft" || e.code === "ControlRight") {
                ctrlKeys.forEach(key => {
                    key.classList.remove("active");
                    key.classList.add("remove");
                })
            }
            if (e.code === "AltLeft" || e.code === "AltRight") {
                altKeys.forEach(key => {
                    key.classList.remove("active");
                    key.classList.add("remove");
                })
            }
            if (e.code === "MetaLeft") {
                winKey.classList.remove("active");
            }
            this.setTimeout(() => {
                keys[i].classList.remove("remove");
            }, 100)
        }
    })
})