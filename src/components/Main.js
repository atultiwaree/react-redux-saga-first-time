import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const btnIds = selector.cartData.map((x) => x.id);
  const allProductIds = selector.productData.map((y) => y.id);

  const verifier = (id) => {
    // console.log("Its verifier ", btnIds, allProductIds, id);
    const isPreset = btnIds.indexOf(id);
    if (isPreset >= 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    dispatch(productList());
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {console.log(
        "All products ids : ",
        allProductIds,
        "Selected Btn Ids ",
        btnIds
      )}
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      {console.log(selector.cartData)}
      <div className="productContainer">
        {selector.productData.map((y, i) => (
          <div key={i} className="productCard">
            {/* {console.log(y.id)} */}
            <div className="img">
              <img src={y.thumbImg} alt={y + i + 1} />
            </div>
            <div className="details">
              <h4 className="h5 title">{y.title}</h4>
              <h5 className="price">Price ₹ : {y.price}</h5>
              <p className="desc">{y.detail}</p>
              <div className="btnContainer">
                <button
                  style={
                    verifier(y.id) === true
                      ? {
                          pointerEvents: "none",
                          backgroundColor: "#36AE7C33",
                          display: "none",
                        }
                      : { color: "white" }
                  }
                  onClick={() => dispatch(addToCart(y))}
                  className="add"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => dispatch(removeToCart(y.id))}
                  className="remove"
                  style={
                    verifier(y.id) === false
                      ? {
                          pointerEvents: "none",
                          backgroundColor: "rgba(234, 78, 60, 0.35)",
                          display: "none",
                        }
                      : { color: "white" }
                  }
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Main;
