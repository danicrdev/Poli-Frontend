import { Link, matchRoutes, redirect, useLocation } from 'react-router-dom';
import { PrivateRoutes } from '../Routes';
import { logout } from '../internal/auth';
import { useAppDispatch } from '../internal/hooks';

interface Props {
  name: string;
  to: string; // Prop para la ruta
  active?: boolean;
}

const MenuItem: React.FC<Props> = ({ name, to, active }) => (
  <li>
    <Link // Utilizar Link para el correcto funcionamiento de React router
      to={to}
      className={
        'text-xl font-bold block py-2 px-3' +
        (active
          ? ' text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
          : ' text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0')
      }
      {...(active && { 'aria-current': 'page' })}
    >
      {name}
    </Link>
  </li>
);

export const Navbar = () => {
  const location = useLocation();
  const matchRoute = matchRoutes(PrivateRoutes, location);
  const path = matchRoute ? matchRoute[0].pathname : '';

  const dispatch = useAppDispatch();

  const items = [
    { name: 'Inicio', path: '/home' },
    { name: 'Adopta', path: '/adopta' },
    { name: 'Contáctanos', path: '/contacto' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
  ];

  return (
    <nav className="mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse"></div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {items.map((item, i) => (
              <MenuItem
                key={i}
                name={item.name}
                to={item.path}
                active={path == item.path}
              />
            ))}
          </ul>
        </div>
        {/* Botón de logout */}
        <a
          className="text-gray-800 hover:bg-[#5b63d1] hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center ml-20"
          onClick={e => {
            e.preventDefault();
            dispatch(logout());
            return redirect('/');
          }}
          title="Cerrar sesión"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
            />
          </svg>
          <span className="sr-only">Cerrar sesión</span>
        </a>
      </div>
    </nav>
  );
};
