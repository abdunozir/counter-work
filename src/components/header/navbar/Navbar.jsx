import "./navbar.css";

export default function Navbar() {
  const list = [
    "Food Service",
    "Health & Beauty",
    "Industrial Ingredients",
    "Beverages",
    "Pet Suplies",
    "Froxen",
    "Cleaning Products",
  ];
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <p>En</p>
          <select className="select">
            <option defaultValue>Austin</option>
            <option>hello</option>
            <option>hello</option>
            <option>hello</option>
          </select>
        </div>
        <div className="nav-right">
          <p>+1 (800) 532 6252</p>
          <p>Help center</p>
        </div>
      </div>
      <div className="navbar-search d-flex aling-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <p className="Epallet">Epallet</p>
          <form
            action=""
            className="d-flex align-items-center justify-content-center"
          >
            <input type="text" className="form-control" placeholder="Search" />
            <select className="form-select w-50">
              <option defaultValue>All categories</option>
              <option>hello</option>
              <option>hello</option>
              <option>hello</option>
            </select>
          </form>
        </div>
        <div className="w-25 d-flex align-items-center justify-content-between">
          <button className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2">
            <i className="bx bxs-inbox"></i>
            <span>Order</span>
          </button>
          <button className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2">
            <i className="bx bxs-cart-alt"></i>
            <span>Card</span>
          </button>
          <button className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2">
            <i className="bx bx-user"></i>
            <span>Profile</span>
          </button>
        </div>
      </div>
      <div className="navigation">
        <ul>
          {list.map((el, i) => {
            return <li key={i}>{el}</li>;
          })}
        </ul>
      </div>
      <div className="nav-links">
        <a href="#">Frozen</a>
        <i className="bx bx-chevron-right"></i>
        <a href="#">Juis</a>
        <i className="bx bx-chevron-right"></i>
        <a href="#">Mott's Unsweetened Applesauce</a>
      </div>
      <div className="nav-back">
        <i class="bx bx-arrow-back"></i>
        <span>Back</span>
      </div>
    </>
  );
}
