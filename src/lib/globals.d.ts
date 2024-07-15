namespace Theme {
	type Values = 'light' | 'dark';
	type Schemes = Values | 'system';

	interface Themes {
		scheme: Schemes;
		readonly value: Values;
	}
}
