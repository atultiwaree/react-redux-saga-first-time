import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("data in header", result);
  return (
    <div className="header">
      <Link to="/">
        <div className="title" style={{ textDecoration: "none" }}>
          <i>DeftShop</i>
        </div>
      </Link>

      <Link to="/Cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="localhost cart"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
