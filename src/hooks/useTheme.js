import {createContext, useCallback, useContext, useLayoutEffect, useState} from "react";

const STORAGE_KEY = "theme";

const systemTheme = () =>
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";

const readTheme = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return systemTheme();
};

const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
};

applyTheme(readTheme());

const ThemeContext = createContext({theme: "dark", toggleTheme: () => {}});

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(readTheme);

    useLayoutEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        const root = document.documentElement;
        root.classList.add("theme-fade");
        window.setTimeout(() => root.classList.remove("theme-fade"), 350);
        setTheme((current) => {
            const next = current === "dark" ? "light" : "dark";
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch (e) {}
            return next;
        });
    }, []);

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);