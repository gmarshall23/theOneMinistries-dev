import { Link } from 'react-router-dom';
import { Menu, Button, DatePicker } from 'antd';
import './admin.css'


const Admin = () => {
    return (
        <main className='admin-page'>
            <h2>This page for Admin tasks</h2>
            <div>
                <Menu mode="horizontal" style={{ width: '80vw' }} className="border">
                    <Menu.Item mode="horizontal">
                        <Link to="/admin/users">Manage Users</Link>
                    </Menu.Item>
                    <Menu.Item mode="horizontal">
                        <Link to="/admin/events">Manage Events</Link>
                    </Menu.Item>
                    <Menu.Item mode="horizontal">
                        <Link to="/admin/prayers">Manage Prayers</Link>
                    </Menu.Item>
                </Menu>
            </div>
            <div>
                <Button type="primary" className='border w-25'>PRESS ME</Button>
                <DatePicker placeholder="select date" />
            </div>
        </main>
    )
}

export default Admin
