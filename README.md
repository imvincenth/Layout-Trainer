# Keyboard Layout Trainer
![layout trainer](https://i.imgur.com/hVqDmH6.png)

### Background & Overview

The traditional QWERTY layout was designed for typewriters to minimize jams
by spreading the most commmonly used keys across the keyboard. There have been more ergonomic 
and efficient layout designed for a more accurate and comfortable typing experience.
While switching to a different keyboard layout is difficult, the benefits are great and better tools should make the transition more smooth.
This should provide typing practice for people trying to switch to a different keyboard layout.
### [try layout_trainer here](https://imvincenth.github.io/Layout-Trainer/)

### Features
#### User Instructions
![layout trainer instructions](https://i.imgur.com/YL1gHZz.png)
![korean instructions](https://i.imgur.com/h69JqV9.png)

#### Korean Layout Support
![korean keyboard](https://i.imgur.com/oTBUnCX.png)

#### Scalability with a few lines of code
Creating new layouts is as easy as copying the QWERTY template file, changing the keyLayout variable to your desired layout, then adding it to the layouts and layoutNames array in the index.js.
```JavaScript
  _createKeys() {
        const fragment = document.createDocumentFragment();

        // Creating the layout box feature
        const layoutElement = document.createElement("div");
        layoutElement.classList.add("layout_changer", "layout_tooltip");
        layoutElement.id = "layoutChanger";
        layoutElement.setAttribute("data-tooltip", "click the arrow to switch layouts");
        layoutElement.innerText = "colemak";

        const layoutButton = document.createElement("button");
        layoutButton.classList.add("layout_button");
        layoutButton.id = "layoutButton";

        this.elements.layoutContainer.appendChild(layoutElement);
        this.elements.layoutContainer.appendChild(layoutButton);

        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
            "tab", "q", "w", "f", "p", "g", "j", "l", "u", "y", ";", "[", "]", "\\",
            "caps", "a", "r", "d", "t", "d", "h", "n", "e", "i", "o", "'", "enter",
            "lshift", "z", "x", "c", "v", "b", "k", "m", ",", ".", "?", "rshift",
            "ctrl", "win", "alt", "space", "alt", "fn", "ctrl"
        ];

        // Creating the HTML for an icon
        const createIconHTML = function (iconName) {
            return `<i class="material-icons">${iconName}</i>`;
        }

        layoutButton.innerHTML = createIconHTML("navigate_next");

        keyLayout.forEach(key => {
            const keyElement = document.createElement("div");
            const lineBreak = ["backspace", "\\", "enter", "rshift"].indexOf(key) !== -1;

            // Setting up the key elements
            keyElement.classList.add("keys");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("backspace_key");
                    keyElement.innerHTML = createIconHTML("backspace");

                    break;

                case "tab":
                    keyElement.classList.add("tab_key");
                    keyElement.textContent = "tab";

                    break;

                case "\\":
                    keyElement.classList.add("slash_key");
                    keyElement.textContent = "\\";

                    break;
                
                case "caps":
                    keyElement.classList.add("capslock_key");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    break;

                case "enter":
                    keyElement.classList.add("enter_key");
                    keyElement.textContent = "enter";

                    break;

                case "lshift":
                    keyElement.classList.add("lshift_key", "shift_left");
                    keyElement.textContent = "shift";
                    
                    break;
                
                case "rshift":
                    keyElement.classList.add("rshift_key", "shift_right");
                    keyElement.textContent = "shift";

                    break;

                case "ctrl":
                    keyElement.classList.add("ctrl_key");
                    keyElement.textContent = "ctrl";

                    break;

                case "win":
                    keyElement.classList.add("win_key");
                    keyElement.textContent = "win";

                    break;

                case "alt":
                    keyElement.classList.add("alt_key");
                    keyElement.textContent = "alt";

                    break;

                case "space":
                    keyElement.classList.add("spacebar");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    break;

                case "fn":
                    keyElement.classList.add("fn_key");
                    keyElement.textContent = "fn";

                    break;

                default:
                    keyElement.textContent = (this.properties.capsLock) ? key.toUpperCase() : key.toLowerCase();

                    break;
            }   

            fragment.appendChild(keyElement);

            if (lineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        })

        return fragment;
    },
```

#### Metrics based on layout language
Completing an English block of text wil calculate words per minute, while completing a block of Korean text will calculate characters per minute.
```JavaScript
  export function timerCheck(wordCount) {
    alertBanner.innerText = (`${timerElement.innerText} seconds taken, ` + String(Math.floor((wordCount * 60) / Number(timerElement.innerText))) + " WPM");
  }

  export function timerCheckKorean(charCount) {
    alertBanner.innerText = (`${timerElement.innerText} seconds taken, ` + String(Math.floor((charCount * 60) / Number(timerElement.innerText))) + " CPM");
  }
```

### Functionality & MVP
  - Display a keyboard layout that registers key presses by the user</li>
  - Display a block of text for the user to type</li>
  - Let the user refresh the block of text to start from the beginning</li>
  - Show updating metrics of the accuracy of inidividual key presses</li>


### Wireframes
![homepage wireframe](https://user-images.githubusercontent.com/60524243/131963740-7ad78825-2fa5-40cd-b2ad-3971fb371714.png)

### Technologies
  - `HTML, CSS`
  - `Javascript`
  - `Material Icons` For the keyboard modifiers
 
 
### Implementation Timeline
**Day 1:** Set up project skeleton, begin working on rendering the keyboard on the screen.</p>
**Day 2:** Work on getting the key presses to register and for the text to render.</p>
**Day 3:** Get the text functionality to work and start working on how to refresh the block.</p>
**Day 4:** Get the typing metrics to update and render at the end of a text block.</p>
**Day 5:** Work on the front end for better visibility.</p>

