import NavBar from '@/components/navbar';
import SideBar from '@/components/Sidebar';

const Layout = ({children}) => {
  return (
    <div>
        <NavBar />
        <SideBar />
        {children}
    </div>
  )
}

export default Layout;