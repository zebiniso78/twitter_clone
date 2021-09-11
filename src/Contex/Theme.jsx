import React from 'react';

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
	const [theme, setTheme] = React.useState(
		window.localStorage.getItem('theme') || 'light',
	);

	React.useEffect(() => {
		window.localStorage.setItem('theme', theme);
	}, [theme]);
	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeProvider, ThemeContext };
