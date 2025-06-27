import Navbar from './Navbar'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex pt-5">
                <LeftSidebar />
                <main className="flex-1">
                    <Outlet />
                </main>
                <RightSidebar />
            </div>
        </div>
    )
}

export default Layout