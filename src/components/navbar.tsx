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
  return (
    <nav className="mb-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4"> {/* Cambié justify-between a justify-center */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <MenuItem name="Inicio" to="/" />
            <MenuItem name="Adopta" to="/adopta" />
            <MenuItem name="Contáctanos" to="/contacto" />
            <MenuItem name="Servicios" to="/servicios" />
            <MenuItem name="Nosotros" to="/nosotros" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
