"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<any>({});


export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useState<string>('retro');

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    };
    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}