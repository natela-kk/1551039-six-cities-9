import Main from '../../pages/main/main';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';


function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded, offers} = useAppSelector((state) => state);

  if(!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route  path={AppRoute.Offer}>
          <Route index element={<Navigate to={AppRoute.Main} />} />
          <Route path=':id' element={<Property offers={offers}/>} />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
