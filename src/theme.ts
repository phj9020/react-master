import { DarkTheme, DefaultTheme } from "styled-components"

// create theme

const lightTheme: DefaultTheme = {
    textColor: "black",
    bgColor : "white",
    btnColor : "tomato",
}

const blackTheme: DarkTheme = {
    textColor: "white",
    bgColor: "black",
    btnColor : "teal",
}

export {lightTheme, blackTheme};