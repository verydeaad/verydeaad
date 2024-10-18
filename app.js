class Person {
    constructor(colour) {
        this.colour = colour
    }
    discriminate() {
        switch (this.colour) {
            case "black":
                console.log("nigger")
                break;
            case "m":
                console.log("migger")
                break;
            default:
                break;
        }
    }
};

let human = new Person("black");
let M = new Person("m");

human.discriminate();
M.discriminate();