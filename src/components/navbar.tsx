interface Props {
  name: string;
  active?: boolean;
}

const MenuItem: React.FC<Props> = ({ name, active }) => (
  <li>
    <a
      href="#"
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
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse"></div>
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <MenuItem name="Inicio" active={true} />
            <MenuItem name="Adopta" />
            <MenuItem name="Contáctanos" />
            <MenuItem name="Servicios" />
            <MenuItem name="Nosotros" />
          </ul>
        </div>
      </div>
    </nav>
  );
};
