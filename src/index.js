import { Qwerty } from "./scripts/qwerty.js";
import { renderNewQuote } from "./scripts/text.js";

window.addEventListener("DOMContentLoaded", function () {
    Qwerty.init();
    renderNewQuote();

    const textDisplayElement = document.getElementById("textDisplay");

    let keys = document.querySelectorAll(".keys");
    let spaceKey = document.querySelector(".spacebar");
    let shiftLeft = document.querySelector(".shift_left");
    let shiftRight = document.querySelector(".shift_right");
    let capsLockKey = document.querySelector(".capslock_key");
    let textInput = document.querySelector(".text_input");
    let refreshButton = document.querySelector(".refresh");

    for (let i = 0; i < keys.length; i++) {
        keys[i].setAttribute("keyname", keys[i].innerText);
    }

    textInput.addEventListener('input', () => {
        const arrQuote = textDisplayElement.querySelectorAll("span");
        const arrVal = textInput.value.split("");
        
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
        
        if (correct) renderNewQuote();
    })

    refreshButton.addEventListener("click", () => {
        renderNewQuote();
    })

    window.addEventListener("keydown", function(e) {
        for (let i = 0; i < keys.length; i++) {
            if (e.key === keys[i].getAttribute("keyname") || e.key === keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.add("active");
            }
            if (e.code == "Space") {
                spaceKey.classList.add("active");
            }
            if (e.code == "ShiftLeft") {
                shiftRight.classList.remove("active");
            }
            if (e.code == "ShiftRight") {
                shiftLeft.classList.remove("active");
            }
            if (e.code == "CapsLock") {
                capsLockKey.classList.toggle("active");
            }
        }
    })

    window.addEventListener("keyup", function(e) {
        for (let i = 0; i < keys.length; i++) {
            if (e.key === keys[i].getAttribute("keyname") || e.key === keys[i].getAttribute('lowerCaseName')) {
                keys[i].classList.remove("active");
                keys[i].classList.add("remove");
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
            this.setTimeout(() => {
                keys[i].classList.remove("remove");
            }, 200)
        }
    })
})