let sor = 0
input.onButtonPressed(Button.A, function () {
    for (let oszlop = 0; oszlop <= 4; oszlop++) {
        led.toggle(oszlop, 2)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let oszlop = 0; oszlop <= 4; oszlop++) {
        for (let oszlop = 0; oszlop <= 4; oszlop++) {
            led.toggle(oszlop, sor)
            basic.pause(500)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let oszlop = 0; oszlop <= 4; oszlop++) {
        led.toggle(sor, 2)
        basic.pause(500)
    }
})
