import { DarkTheme, DefaultTheme } from "styled-components"

// create theme

const darkTheme: DarkTheme = {
    textColor: "whitesmoke",
    bgColor : "#34495e",
    accentColor : "#2ecc71",
    cardColor: "white"
}

const lightTheme : DefaultTheme = {
    bgColor : "whitesmoke",
    textColor: "#100001",
    accentColor : "#9c88ff",
    cardColor: "#A9957B"
}


export {darkTheme, lightTheme};