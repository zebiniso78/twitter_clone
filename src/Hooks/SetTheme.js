import React from 'react';
import { ThemeContext } from '../Contex/Theme';

const SetTheme = () => {
	const ctx = React.useContext(ThemeContext);

	return [ctx.theme, ctx.setTheme];
};

export default SetTheme;
