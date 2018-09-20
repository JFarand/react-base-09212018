import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		<h1>404!</h1>
		<Link to="/">Go home</Link>
	</div>
);

export default NotFoundPage;
