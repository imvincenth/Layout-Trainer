export const Dvorak = {
    elements: {
        main: null,
        keysContainer: null,
        layoutContainer: null,
        keys: []
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Creating the main elements (main < keyboard wrap < keyboard_keys < row < keys)
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");
        this.elements.layoutContainer = document.createElement("div");
        this.elements.main.style.display = "none";
        
        // Setup the main elements
        this.elements.main.classList.add("main");
        this.elements.keysContainer.classList.add("keyboard_wrap");
        this.elements.layoutContainer.classList.add("layout_box");
        this.elements.keysContainer.appendChild(this._createKeys());

        // Adding all keys as NodeList for the CapsLock function

        // Add to DOM
        document.body.appendChild(this.elements.main);
        this.elements.main.appendChild(this.elements.keysContainer);
        this.elements.main.appendChild(this.elements.layoutContainer);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();

        // Creating the layout box feature
        const layoutElement = document.createElement("div");
        layoutElement.classList.add("layout_changer");
        layoutElement.id = "layoutChanger";
        layoutElement.setAttribute("data-tooltip", "click the arrow to switch layouts");
        layoutElement.innerText = "dvorak";

        const layoutButton = document.createElement("button");
        layoutButton.classList.add("layout_button");
        layoutButton.id = "layoutButton";

        this.elements.layoutContainer.appendChild(layoutElement);
        this.elements.layoutContainer.appendChild(layoutButton);

        const keyLayout = [
            "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "[", "]", "backspace",
            "tab", "'", ",", ".", "p", "y", "f", "g", "c", "r", "l", "/", "=", "\\",
            "caps", "a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-", "enter",
            "lshift", ";", "q", "j", "k", "x", "b", "m", "w", "v", "z", "rshift",
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

        //             // Extra properties here

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

    // _toggleCapsLock() {
    //     this.properties.capsLock = !this.properties.capsLock;

    //     for (const key of this.elements.keys) {
    //         if (key.childElementCount === 0) { // Checking if key has an icon appended
    //             key.textContent = (this.properties.capsLock) ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
    //         }
    //     }
    // }
};