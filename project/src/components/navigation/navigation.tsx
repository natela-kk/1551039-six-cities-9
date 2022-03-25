import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';

function Navigation(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href={authorizationStatus === AuthorizationStatus.NoAuth ? AppRoute.Login : '/'}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {authorizationStatus === AuthorizationStatus.NoAuth ? (<span className="header__login">Sign in</span>) : (
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            )}
          </a>
        </li>
        {authorizationStatus === AuthorizationStatus.Auth && (
          <li className="header__nav-item">
            <a className="header__nav-link" href="/">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
