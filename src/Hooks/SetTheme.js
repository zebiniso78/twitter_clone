import React from 'react';
import { Context } from '../Contex/Theme';

const SetTheme = () => {
	const ctx = React.useContext(Context);

	return [ctx.theme, ctx.setTheme];
};

export default SetTheme;
