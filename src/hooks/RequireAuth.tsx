import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {
	const location = useLocation();

	return (
		localStorage.getItem('Token')
			? <Outlet />
			:
			<Navigate to="/" state={{ from: location }} replace />
	);
}
