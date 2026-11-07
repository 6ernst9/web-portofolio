import sun from "../assets/img/icons/sun.svg";
import moon from "../assets/img/icons/moon.svg";
import {useTheme} from "../hooks/useTheme";
import "./ThemeToggle.css";

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
