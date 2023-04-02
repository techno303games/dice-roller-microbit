while (true) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + ("" + randint(1, 6)))
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + ("" + randint(1, 6)))
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showString("" + ("" + randint(1, 6)))
    }
    
}
