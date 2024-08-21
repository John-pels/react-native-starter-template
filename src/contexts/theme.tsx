import * as SecureStore from 'expo-secure-store';
import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Appearance } from 'react-native';

export type ThemeType = 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { },
});

export const useThemeContext = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    useEffect(() => {
        // Load theme from SecureStore on component mount
        retrieveThemeFromStorage().then(storedTheme => {
            if (storedTheme) {
                setTheme(storedTheme as ThemeType);
            } else {
                // If no theme is stored, use the device appearance
                const initialTheme = Appearance.getColorScheme() || 'light';
                setTheme(initialTheme as ThemeType);
            }
        });

        // Subscribe to system theme changes
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme as ThemeType);
            storeThemeInStorage(colorScheme as ThemeType);
        });

        return () => subscription.remove();
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        storeThemeInStorage(newTheme);
    };

    const storeThemeInStorage = async (theme: ThemeType) => {
        try {
            await SecureStore.setItemAsync('theme', theme);
        } catch (error) {
            console.error('Error storing theme:', error);
        }
    };

    const retrieveThemeFromStorage = async () => {
        try {
            const storedTheme = await SecureStore.getItemAsync('theme');
            return storedTheme as ThemeType;
        } catch (error) {
            console.error('Error retrieving theme:', error);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
