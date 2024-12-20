import { Link } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";

const Shop = () => {
  const {loading, products} = useProduct();

  return (
    <>
      <main className="max-w-screen-2xl m-auto grid grid-cols-6 pt-8 gap-3">
        <nav className="col-span-1">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </nav>
        <section className="col-span-5 w-full">
          {loading && <p>Loading</p>}
          <div className="w-full grid grid-cols-4 gap-4">
            {products.map((item, index) => (
              <div key={index}>
                <Link to={`/product/${item._id}`}>
                  {" "}
                  <img src={item.image} alt="" />
                </Link>

                <div className="text-center mt-2">
                  <Link to={`/product/${item._id}`}>
                    <h5 className="text-xl ">{item.title}</h5>
                  </Link>
                  <h3 className="text-2xl font-semibold">{item.price}$</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Shop;
