import Navbar from './Navbar'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'
import Container from '../Golobalcomponentes/Containear'

const Layout = () => {
    return (
        <>
            <Container>
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
            </Container>
        </>

    )
}

export default Layout