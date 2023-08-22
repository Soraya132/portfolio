import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react';
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";
const ThemeContext = createContext()


const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("theme"))
}
const primary = getLocalStorage()
console.log(primary)
const ThemeProvider = ({ children }) => {

    const [themeColor, setThemeColor] = useState(getLocalStorage() || "red")
    const [animatedCursor, setAnimatedCursor] = useState(<Cursor
        animation="beat"
        color="transparent"
        hoveringAnimation="magnify"
        shape="round"
        size="xl"
        speed="fast"
    />)
    const colors = ["blue", "green", "red", "orange", "gray", "pink", "purple", "teal", 'fuchsia', "yellow", "lightCoral", "cyan"]

    const handleChange = (color) => {
        setThemeColor(color)
    }
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(themeColor))
    }, [themeColor])
    return (
        <ThemeContext.Provider value={{ themeColor, handleChange, colors, animatedCursor, setAnimatedCursor }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => {
    return useContext(ThemeContext)
}
export default ThemeProvider
