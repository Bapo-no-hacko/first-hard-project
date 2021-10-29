input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    for (let index = 0; index < 10; index++) {
        music.playMelody("C5 C5 C5 A A A E C5 ", 120)
        music.playMelody("C5 C5 G G G C C B ", 120)
        music.playMelody("B B E E E C C A ", 120)
        music.playMelody("A A B C5 G F E C ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("P1:Alonso P2:Ocon P3:Verstappen P4:Perez")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . # # #
        . # # # #
        . . # # #
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # # . .
        # # # # .
        # # # . .
        . # . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
