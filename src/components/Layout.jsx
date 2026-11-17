import {Link, Outlet} from 'react-router';

const Layout = () => {
  return (
    <>
      <header className="app-header">
        <h1>My App</h1>
        <nav aria-label="Main navigation">
          <ul className="navigation-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
