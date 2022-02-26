import Main from '../../pages/main/main';
import FavoritesComponent from '../../pages/favorites/favorites';
import LoginComponent from '../../pages/login/login';
import PropertyComponent from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../const';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main count = {offersCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginComponent />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <FavoritesComponent />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<PropertyComponent />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
