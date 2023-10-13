import { BrowserRouter } from 'react-router-dom';

import React from 'react';
import AllRoutes from '.';

function Routes() {
	return (
		<BrowserRouter>
			<AllRoutes />
		</BrowserRouter>
	);
}

export default Routes;
