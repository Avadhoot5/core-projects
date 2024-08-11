import React, { createContext, ReactNode, useState, FC } from "react";

// Define the type for the theme
interface Theme {
    backGround: string;
    color: string;
}

// Define the type for the context value
interface ThemeContextType {
    theme: Theme;
    toggle: () => void;
}

// Define the colors
const color = {
    light: {
        backGround: 'white',
        color: 'black',
    },
    dark: {
        backGround: 'black',
        color: 'white',
    }
};

// Create context with default values
const defaultContextValue: ThemeContextType = {
    theme: color.light,
    toggle: () => {} // Placeholder function
};

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(color.light);

    const toggle = () => {
        setTheme(prevTheme => prevTheme === color.light ? color.dark : color.light);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
