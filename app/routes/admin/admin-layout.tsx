import Rect from 'react'
import { Outlet } from 'react-router';

function AdminLayout() {
  return (
    <div className='admin-layout'>
      Mobile Sidebar
      <aside className='w-full max-w-[270px] hidden lg:block'>Sidebat</aside>
      <aside className='children'>
      <Outlet />
      </aside>
    </div>
  )
}
export default AdminLayout;