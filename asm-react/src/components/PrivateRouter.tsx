import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const useRole = localStorage.getItem("role");
    setRole(useRole);
    setLoading(false);
  },[]);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (role === "member" || role === null) {
    toast.error("Bạn không có quyền truy cập trang quan tri!");
    return <Navigate to="/" />;
  }
  if (role === "admin") {
    return <Outlet />;
  }
  return null;
}

export default PrivateRouter
