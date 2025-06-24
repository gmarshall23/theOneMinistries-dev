import { Outlet, Link } from 'react-router-dom';
const OneWay = ({user, setUser, scrips, setScrips}) => {
  return (
    <div className="oneway">
      <h1>OneWay Page</h1>
      <nav>
        <Link to="one-less/living">Living</Link>
        <Link to="oneliners">Oneliners</Link>
      </nav>
      {/* This outlet is where the child routes get rendered */}
      <Outlet />
    </div>
    );
}

export default OneWay
