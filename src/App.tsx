import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BASE_URL, PrivateRoutes, PublicRoutes } from './Routes';
import { PrivateRoute, PublicRoute } from './internal/route';

function AppRouter() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        {PublicRoutes.map((item, id) => (
          <Route key={id} path={item.path} element={<PublicRoute />}>
            <Route key={id} path={item.path} element={<item.component />} />
          </Route>
        ))}

        {PrivateRoutes.map((item, id) => (
          <Route key={id} path={item.path} element={<PrivateRoute />}>
            <Route key={id} path={item.path} element={<item.component />} />
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
