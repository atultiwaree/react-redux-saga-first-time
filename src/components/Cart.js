import { useSelector } from "react-redux";

export const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const priceArr = cartData.map((x) => x.price);
  const finalPriceSum = priceArr.reduce((x, y) => x + y, 0);
  return (
    <div className="cartBox">
      <h1 style={{ fontWeight: "normal" }}>Your cart Information 🛒</h1>
      {console.log("price ", finalPriceSum)}
      <table style={{ width: "80%", margin: "0 auto" }}>
        <tr>
          <th>Sr.</th>
          <th>Product name</th>
          <th>Price</th>
        </tr>

        {cartData.length > 0 ? (
          cartData.map((x, y) => (
            <tr key={y}>
              <td>{y}</td>
              <td>{x.title}</td>
              <td>₹ {x.price}</td>
            </tr>
          ))
        ) : (
          <div>
            <p
              style={{
                fontSize: "2rem",
                textAlign: "center",
                fontWeight: "bold",
                margin: "0",
                color: "red",
              }}
            >
              Add product otherwise leave the site{" 🙏 "}
            </p>
            <img
              src="https://i.ibb.co/XzkvkxV/funnyDog.png"
              alt="funnyDog"
              border="0"
              width="100"
              style={{ margin: "0 auto", width: "20rem" }}
            />
          </div>
        )}
      </table>

      <table style={{ width: "50%", margin: "0 auto" }}>
        <tr>
          <th>Total amount in cart </th>
          <th>₹ {finalPriceSum}</th>
        </tr>
      </table>
    </div>
  );
};
