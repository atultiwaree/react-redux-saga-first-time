import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  useEffect(() => {
    dispatch(productList());

    return () => {
      console.log("hooked");
    };
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>

      <div className="productContainer">
        {selector.productData.map((y, i) => (
          <div key={i} className="productCard">
            {/* {console.log(y.id)} */}
            <div className="img">
              <img src={y.thumbImg} alt={y + i + 1} />
            </div>
            <div className="details">
              <h4 className="h5 title">{y.title}</h4>
              <p className="desc">{y.detail}</p>
              <div className="btnContainer">
                <button
                  onClick={() => dispatch(addToCart(y.id))}
                  className="add"
                >
                  Add to cart
                </button>
                <button
                  onClick={() => dispatch(removeToCart(y.id))}
                  className="remove"
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

//fucking I'll get that product...
//Json object having t 5 keys

// thumImg :  ', title : ', id : ', details