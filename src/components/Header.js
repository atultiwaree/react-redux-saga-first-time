import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchProduct } from "../redux/action";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatcher = useDispatch();

  const result = useSelector((state) => state.cartData);
  console.warn("data in header", result);
  return (
    <div className="header">
      <Link to="/">
        <div className="title" style={{ textDecoration: "none" }}>
          <i>DeftShop</i>
        </div>
      </Link>

      <input
        type="search"
        placeholder="Search product..."
        name=""
        id=""
        style={{
          flexBasis: "50%",
          border: "4px solid blue",
          padding: ".4rem",
          borderRadius: "8px",
          fontWeight: "500",
        }}
        onChange={(e) => dispatcher(searchProduct(e.target.value))}
      />

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
