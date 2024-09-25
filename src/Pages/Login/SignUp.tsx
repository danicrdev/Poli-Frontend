import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import dog from '../../assets/dog.webp';
import { register } from '../../internal/auth';
import { useAppDispatch } from '../../internal/hooks';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');

  const validatePassword = password == '' || password.length >= 5;
  const verifyPassword = password == passwordVerify;
  const youCanRegister =
    email != '' && password != '' && password == passwordVerify;

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="text-4xl mb-8 font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
        ¡Bienvenido a huellas peludas!
      </h1>
      <h1 className="text-2xl mb-6 font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
        Crea una cuenta
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
              <label
                htmlFor="email"
                className={'block mb-2 text-sm font-medium text-gray-900'}
              >
                Correo electrónico
              </label>
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
                placeholder="name@company.com"
                required={true}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className={
                  'block mb-2 text-sm font-medium ' +
                  (validatePassword ? 'text-gray-900' : 'text-red-700')
                }
              >
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
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
            <div>
              <label
                htmlFor="password-verify"
                className={
                  'block mb-2 text-sm font-medium ' +
                  (verifyPassword ? 'text-gray-900' : 'text-red-700')
                }
              >
                Repita la contraseña
              </label>
              <input
                type="password"
                name="password-verify"
                id="password-verify"
                placeholder="••••••••"
                className={
                  'border ' +
                  'rounded-lg ' +
                  'block ' +
                  'w-full ' +
                  'p-2.5 ' +
                  (verifyPassword
                    ? 'bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600'
                    : 'bg-red-50 border-red-500 text-red-900 focus:ring-red-500 focus:border-red-500')
                }
                required={true}
                value={passwordVerify}
                onChange={e => setPasswordVerify(e.target.value)}
              />
              {!verifyPassword && (
                <p className="mt-2 text-xs text-red-600">
                  Las contraseñas no coinciden
                </p>
              )}
            </div>
            <button
              type="submit"
              className={
                'w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' +
                (youCanRegister ? '' : 'cursor-not-allowed')
              }
              disabled={!youCanRegister}
              onClick={e => {
                e.preventDefault();
                if (youCanRegister) {
                  dispatch(register({ email, password }));
                  return redirect('/home');
                }
              }}
            >
              Registrarte
            </button>
            {email != '' && !youCanRegister && (
              <p className="mt-2 text-xs text-red-600">
                Complete todos los datos del formulario
              </p>
            )}
            <p className="text-sm font-light text-gray-500">
              ¿Ya tienes una cuenta?{' '}
              <Link
                to={'/login'}
                className="font-medium text-primary-600 hover:underline"
              >
                Iniciar sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
