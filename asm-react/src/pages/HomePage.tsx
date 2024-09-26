import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <>
      <section id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=1920&h=0&FileInput=/Resources/Silde/2024/08/07/a1667961-8c7c-492b-aab1-53df18933aff.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=1920&h=0&FileInput=/Resources/Silde/2024/06/12/SUMMER%20COLLECTION%20(PC).jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          {/* <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </section>
      <section className="max-w-screen-2xl m-auto ">
        <h1 className="text-orange-500 text-3xl font-semibold my-4">SALE</h1>
        <div className="grid grid-cols-4 gap-3">
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/12/13/z4969606556406_3ee01e7ddabf5cb1b66bdb882d7ac04e.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/10/26/z4349451489667_45742d08401b524800598d23f357d37a.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/03/26/z5286355656465_e6be6cb2d262f367501307e16f57f772.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center underline text-base  my-8 text-gray-600 font-normal">
        {" "}
        <Link to="">XEM TAT CA</Link>
      </div>
      <h2 className="text-center text-2xl font-medium my-4">SAN PHAM BAN CHAY</h2>
      <section className="max-w-screen-2xl m-auto">
        <div className="grid grid-cols-4 gap-3">
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/12/13/z4969606556406_3ee01e7ddabf5cb1b66bdb882d7ac04e.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=//Upload/2022/03/z3292316516429-0fd72ed68e722b102ffa98a0d7e32070.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2023/10/26/z4349451489667_45742d08401b524800598d23f357d37a.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://img.mwc.com.vn/giay-thoi-trang?w=640&h=640&FileInput=/Resources/Product/2024/03/26/z5286355656465_e6be6cb2d262f367501307e16f57f772.jpg"
              alt=""
            />
            <div className="text-center">
              <h3 className="text-2xl text-red-600 font-semibold mt-3">
                149000 VND
              </h3>
              <div className="flex justify-center mt-3">
                <p className="bg-orange-400 w-[200px] rounded-md text-center text-white">
                  da ban 4
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2">
                <p className="w-[30px] h-[30px] bg-slate-400 rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-black rounded-full"></p>
                <p className="w-[30px] h-[30px] bg-pink-500 rounded-full"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default HomePage;
