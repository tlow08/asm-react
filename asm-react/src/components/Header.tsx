import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     <section className="max-w-screen-2xl m-auto flex justify-between my-2">
      <div className="flex gap-5 items-center">
      <img className="w-[120px] h-auto" src="https://mwc.com.vn/Assets/App/images/logo.png" alt="" />
      <nav className="flex gap-5 text-xl font-semibold" >
        <Link to="/">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/register">REGISTER</Link>
        <Link to="/login">LOGIN</Link>
      </nav>
      </div>
      <div className="flex gap-4 items-center">
        <input className="w-[300px] h-[40px] p-1 border-2 rounded-lg border-black" type="text" name="" id="" placeholder="Search..." />
       <div className="flex gap-2 text-2xl font-semibold">
       <i className="bi bi-person"></i>
       <i className="bi bi-cart"></i>
       </div>
      </div>
     </section>
    </>
  );
};

export default Header;
