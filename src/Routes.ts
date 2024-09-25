import Adopta from './Pages/Adopta/Adopta';
import Contactenos from './Pages/Contactenos';
import Home from './Pages/Home/Home';
import { Login } from './Pages/Login/Login';
import { SignUp } from './Pages/Login/SignUp';
import Nosotros from './Pages/Nosotros';
import Servicios from './Pages/Servicios';

export const BASE_URL = import.meta.env.BASE_URL;

interface RouteType {
  path: string;
  component: React.FC;
}

const PublicRoutes: RouteType[] = [
  {
    path: '/',
    component: SignUp,
  },
  {
    path: '/login',
    component: Login,
  },
];

const PrivateRoutes: RouteType[] = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/adopta',
    component: Adopta,
  },
  {
    path: '/contacto',
    component: Contactenos,
  },
  {
    path: '/servicios',
    component: Servicios,
  },
  {
    path: '/nosotros',
    component: Nosotros,
  },
];

export { PrivateRoutes, PublicRoutes };
