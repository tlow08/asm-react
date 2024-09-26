import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
   <>
    <div className="flex items-center justify-between p-2 bg-gray-300 mb-2">
        <p>Hello admin!</p>
        <Link to="/" className="btn btn-warning" >Out</Link>
    </div>
    <div className="max-w-full grid grid-cols-8 gap-3">
      <aside className="col-span-1">
        <div className="flex items-center justify-center"> 
            <div><img className="w-[100px] rounded-full" src="https://cdn-media.sforum.vn/storage/app/media/THANHAN/2/2a/avatar-dep-99.jpg" alt="" /></div>
        </div>
        <nav>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><Link to="/admin/dashboard">Dashboard</Link></li>
            <li className="list-group-item"><Link to="/admin/products">Products</Link></li>
            <li className="list-group-item"><Link to="/admin">Orders</Link></li>
            <li className="list-group-item"><Link to="/admin">Users</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="col-span-7">
        <Outlet />
      </main>
    </div>
   </>
  );
};

export default AdminLayout;
