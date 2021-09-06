const Qwerty = {
    elements: {
        main: null,
        keyRows: null,
        keysContainer: null,
        keys: []
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        this.elements.main = document.createElement("div");
        
    }
}