import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import dog from '../../assets/dog.webp';
import { signin } from '../../internal/auth';
import { useAppDispatch, useAppSelector } from '../../internal/hooks';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorUser, setErrorUser] = useState(false);
  const { users } = useAppSelector(state => state.auth);

  const validatePassword = password == '' || password.length >= 5;
  const youCanSignin = email != '' && password != '';

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="text-2xl mb-6 font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
        Ingresa a tu cuenta
      </h1>
      <img
        className="flex items-center mb-6 w-8 h-8 mr-2"
        src={dog}
        alt="logo"
      />
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className={
                  'bg-gray-50 ' +
                  'border ' +
                  'border-gray-300 ' +
                  'text-gray-900 ' +
                  'rounded-lg ' +
                  'focus:ring-primary-600 ' +
                  'focus:border-primary-600 ' +
                  'block ' +
                  'w-full ' +
                  'p-2.5'
                }
                placeholder="Correo electrónico"
                required={true}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                className={
                  'border ' +
                  'rounded-lg ' +
                  'block ' +
                  'w-full ' +
                  'p-2.5 ' +
                  (validatePassword
                    ? 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600'
                    : 'bg-red-50 border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500')
                }
                required={true}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              {!validatePassword && (
                <p className="mt-2 text-xs text-red-600">
                  La contraseña debe tener al menos 5 caracteres
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500">
                    Recordarme
                  </label>
                </div>
              </div>
              {/* <Link
                to={'#'}
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link> */}
            </div>
            <button
              type="submit"
              className={
                'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' +
                (youCanSignin ? '' : 'cursor-not-allowed')
              }
              onClick={e => {
                e.preventDefault();
                if (youCanSignin) {
                  if (!(email in users) || users[email] !== password) {
                    setErrorUser(true);
                    return;
                  }
                  dispatch(signin());
                  return redirect('/home');
                }
              }}
            >
              Iniciar sesión
            </button>
            {errorUser && (
              <p className="mt-2 text-xs text-red-600">
                Error usuario o contraseña invalidos.
              </p>
            )}
            <p className="text-sm font-light text-gray-500">
              ¿Aún no tienes una cuenta?{' '}
              <Link
                to={'/'}
                className="font-medium text-primary-600 hover:underline"
              >
                Crear cuenta nueva
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
