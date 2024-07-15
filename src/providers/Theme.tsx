'use client';

import { useColorScheme } from '@mantine/hooks';
import { createContext, useEffect, useState } from 'react';

interface ThemeValues {
	changeTheme: (to: Theme.Schemes) => void;
	setScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
	theme: Theme.Themes;
}

interface P {
	children: React.ReactNode;
	font: string;
}

const initial: Theme.Themes = {
	scheme: 'system',
	value: 'dark',
};

export const ThemeContext = createContext<ThemeValues>({
	changeTheme: () => {},
	setScrollLocked: () => {},
	theme: initial,
});

export const ThemeProvider: React.FC<P> = ({ children, font }) => {
	const systemScheme = useColorScheme();

	const [theme, setTheme] = useState<Theme.Themes>(initial);
	const [scroll_locked, setScrollLocked] = useState(false);

	useEffect(() => {
		changeTheme(systemScheme);
	}, [systemScheme]);

	const changeTheme = (to: Theme.Schemes): void => {
		if (to === 'system') {
			setTheme({ scheme: to, value: systemScheme });
			return;
		}

		setTheme({ scheme: to, value: to });
	};

	return (
		<ThemeContext.Provider value={{ changeTheme, theme, setScrollLocked }}>
			<body className={`${theme.value} ${font}${scroll_locked ? ' locked' : ''}`}>{children}</body>
		</ThemeContext.Provider>
	);
};
