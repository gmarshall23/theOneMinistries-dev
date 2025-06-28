import { Link, Routes, Route } from 'react-router-dom';
import { Menu as AntdMenu} from 'antd';
import Users from './admin-content/Users';
import AdminEvents from './admin-content/AdminEvents';
import AdminPrayers from './admin-content/AdminPrayers';
import StudyForm from './admin-content/AddStudy';
import Questions from './admin-content/Questions';
import './admin.css';


const Admin = ({ user, setUser }) => {
  return (
    <>
      <header>
        <h2>This page for Admin tasks</h2>
      </header>
      <main className='admin-page'>

        <nav>
          <AntdMenu mode="horizontal" style={{ width: '80vw' }} className="border">
            <AntdMenu.Item key="users">
              <Link to="/admin/admin-users">Manage Users</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="events">
              <Link to="/admin/admin-events">Manage Events</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="prayers">
              <Link to="/admin/admin-prayers">Manage Prayers</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="q-and-a">
              <Link to="/admin/admin-q-and-a">Manage Q&A</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="studies">
              <Link to="/admin/admin-studies">Manage Studies</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="exit">
              <Link to="/">Exit</Link>
            </AntdMenu.Item>
          </AntdMenu>
        </nav>

        <section className='admin-content'>
          <Routes>
            <Route path="admin-users" element={<Users />} />
            <Route path="admin-events" element={<AdminEvents />} />
            <Route path="admin-prayers" element={<AdminPrayers />} />
            <Route path="admin-studies" element={<StudyForm  />} />
            <Route path="admin-q-and-a" element={<Questions />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default Admin;
