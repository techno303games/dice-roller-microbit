while True:
    if input.button_is_pressed(Button.A):
        basic.show_string("" + str((randint(1, 6))))
    elif input.button_is_pressed(Button.B):
        basic.show_string("" + str((randint(1, 6))))
    elif input.button_is_pressed(Button.AB):
        basic.show_string("" + str((randint(1, 6))))