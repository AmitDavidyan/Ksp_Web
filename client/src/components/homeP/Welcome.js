import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="background">
      <h1 className="Welcome">
        Welcome to the largest and cheapest website in Israel!
      </h1>
      <h2 className="menu_products">Among our products you will find: </h2>
      <div className="li_products">
        <h4>
          <li>Phone</li>
          <li>Laptop</li>
          <li>TV</li>
        </h4>
      </div>
      <div className="pic_shop">
        <img
          src="https://ksp.co.il/newmap/photo/atta3.png"
          width={400}
          height={180}
        />
      </div>
      <Link to="/products">
        <button className="button_shop">Press here to start a shopping</button>
      </Link>
    </div>
  );
}

export default Welcome;
