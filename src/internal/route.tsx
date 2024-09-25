import { Navigate, Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { useAppSelector } from './hooks';

export function PublicRoute() {
  const { isLoggedIn } = useAppSelector(state => state.auth);

  return isLoggedIn ? <Navigate to={'/home'} replace /> : <Outlet />;
}

export function PrivateRoute() {
  const { isLoggedIn } = useAppSelector(state => state.auth);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
