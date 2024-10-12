import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [messageShown, setMessageShown] = useState(false); // New state to track if message has been shown

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !messageShown) {
      if (!role) {
        toast.success("Please log in");
      } else if (role === "member") {
        toast.success("Welcome to the shop!");
      } else if (role === "admin") {
        toast.success("Hello admin!");
      }
      setMessageShown(true); // Ensure message is shown only once
    }
  }, [loading, role, messageShown]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!role) {
    return <Navigate to="/login" />;
  }

  if (role === "member") {
    return <Navigate to="/" />;
  }

  if (role === "admin") {
    return <Outlet />;
  }

  return null;
};

export default PrivateRouter;
