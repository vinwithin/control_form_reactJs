import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{
            theme,
            toogleTheme: () => setTheme(theme==="ligth" ? "dark" : "light")
        }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);
