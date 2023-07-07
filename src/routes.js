import { lazy, Suspense } from "react";
import AuthTabs from './pages/auth/auth-tabs/AuthTabs';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => {
	const elements = useRoutes([
		{
			path: '/',
			element: <AuthTabs />
		}
	]);

	return elements;
}