import sun from "../assets/img/sun.svg";
import moon from "../assets/img/moon.svg";
import {useTheme} from "../hooks/useTheme";

export const ThemeToggle = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
            <img src={theme === "dark" ? sun : moon} alt="" />
        </button>
    );
};