import { matchRoutes, redirect, useLocation } from 'react-router-dom';
import { PrivateRoutes } from '../Routes';
import { useAppDispatch } from '../internal/hooks';
import { logout } from '../internal/auth';

interface Props {
  name: string;
  to: string; // Prop para la ruta
  active?: boolean;
}

const MenuItem: React.FC<Props> = ({ name, to, active }) => (
  <li>
    <a
      href={to} // Usar href directamente para navegar
      className={
        'text-xl font-bold block py-2 px-3' +
        (active
          ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
          : ' text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0')
      }
      {...(active && { 'aria-current': 'page' })}
    >
      {name}
    </a>
  </li>
);

export const Navbar = () => {
  const location = useLocation();
  const matchRoute = matchRoutes(PrivateRoutes, location);
  const path = matchRoute ? matchRoute[0].pathname : '';

  const dispatch = useAppDispatch();

  return (
    <nav className="mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
        {' '}
        {/* Cambié justify-between a justify-center */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <MenuItem name="Inicio" to="/home" active={path == '/home'} />
            <MenuItem name="Adopta" to="/adopta" active={path == '/adopta'} />
            <MenuItem
              name="Contáctanos"
              to="/contacto"
              active={path == '/contacto'}
            />
            <MenuItem
              name="Servicios"
              to="/servicios"
              active={path == '/servicios'}
            />
            <MenuItem
              name="Nosotros"
              to="/nosotros"
              active={path == '/nosotros'}
            />
          </ul>
        </div>
        {/* Botón de login */}
        <div className="ml-20">
          {' '}
          {/* Añadí un margen izquierdo más pequeño */}
          <a
            // href="/login"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={e => {
              e.preventDefault();
              dispatch(logout());
              return redirect('/');
            }}
          >
            Cerrar sesión
          </a>
        </div>
      </div>
    </nav>
  );
};
