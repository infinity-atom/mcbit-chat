let using = 0
radio.onReceivedNumber(function (receivedNumber) {
    using = 1
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    if (receivedNumber == 0) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . # . #
            # . . . #
            `)
    }
    basic.pause(5000)
    basic.clearScreen()
    using = 0
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(125)
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(125)
    radio.sendNumber(1)
})
basic.forever(function () {
    if (using == 0) {
        basic.showString("A: ")
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.pause(1000)
        basic.showString("B: ")
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . # . #
            # . . . #
            `)
        basic.pause(1000)
    }
})
