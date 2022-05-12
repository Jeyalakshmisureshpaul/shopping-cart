import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import CartItem from "./CartItem";
import { useState } from "react";

function App() {
  //Creating useState for display Cart item data using Array
  const [product, setProducts] = useState([
    {
      id: 1,
      title: "Audi",
      price1: 40000,
      view: true,
      img: "https://audimediacenter-a.akamaihd.net/system/production/media/90567/images/72391bd2d21a80a761f0df1bd5bff197d5804daa/A201895_x500.jpg?1583155437",
    },
    {
      id: 2,
      title: "Benz",
      rating: true,
      price: 20000,
      price1: 18000,
      sale: true,
      img: "https://th.bing.com/th/id/OIP.mlJApjiEVOIG8G62Hdl-MAHaEe?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      title: "BMW",
      price: 500000,
      price1: 250000,
      sale: true,
      img: "https://carleaseoffers-clo.com/wp-content/uploads/2018/02/usc80bms282a021001.png",
    },
    {
      id: 4,
      title: "Jaguar",
      rating: true,
      price1: 400000,
      img: "https://i.pinimg.com/originals/74/2c/0c/742c0c8ec1ea2e96df08b3810bb3fcfe.png",
    },
    {
      id: 5,
      title: "Ferrari",
      price: 500000,
      price1: 250000,
      sale: true,
      img: "https://purepng.com/public/uploads/medium/purepng.com-ferrari-laferrari-doors-opencarferrarivehicletransport-961524663453ibcei.png",
    },
    {
      id: 6,
      title: "Rolls Royce",
      price1: 1200000,
      view: true,
      img: "https://www.businessinsider.in/thumb/msid-65954654,width-700,resizemode-4,imgsize-50531/Rolls-Royce-revealed-a-custom-Phantom-limo-that-transforms-into-a-private-suite-on-wheels.jpg",
    },
    {
      id: 7,
      title: "Lamborghini",
      rating: true,
      price: 200000,
      price1: 180000,
      sale: true,
      img: "https://imgd.aeplcdn.com/600x337/n/cw/ec/97705/huracan-sto-exterior-right-front-three-quarter-2.jpeg?q=75",
    },
    {
      id: 8,
      title: "Mitsubishi",
      rating: true,
      price1: 400000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiu0t5WOQCNaSqUyWLOqOHgVDbEDAgNC3S4BJUJPs5kA&s",
    },
  ]);

  const [cartitems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

//function for adding items to cart
  let handleCart = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price1);
  };

//function for removing item from cart
  let handleRemoveCart = (item) => {
    let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
    cartitems.splice(itemIndex, 1);
    setCartItems([...cartitems]);
    setTotal(total - item.price1);
  };

  return (
    //Creating nav bar
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#start">
            <strong>Start Bootstrap</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fw-6"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#about">
                  About
                </a>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle text-muted"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#all">
                        All Products
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="#item">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#new">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
       
              <div className="btn btn-outline-dark p-1" >
                <img
                  alt="_targer"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                />
                <a href="https://icons8.com/icon/8AfUMPlae06y/shopping-cart">
                  {""}
                </a>{" "}
                Cart
                <span className="badge bg-dark rounded-pill ms-2">
                  {" "}
                  {cartitems.length}{" "}
                </span>
                <hr/>
                <ol className="list-group list-group-numbered">
                  {/* maping array data to cart component */}
                  {cartitems.map((item) => {
                    return (
                      <CartItem
                        item={item}
                        handleRemoveCart={handleRemoveCart}
                      />
                    );
                  })}
                </ol>
                {/* display total amount in cart */}
                {cartitems.length > 0 ? (
                  <div className="col-lg-12 text-center">
                    <h6>Total : {total}</h6>
                  </div>
                ) : (
                  <div className="col-lg-12 text-center">
                    <h6>No Items in Cart</h6>
                  </div>
                )}
              </div>
           
          </div>
        </div>
      </nav>
      <div className="card text-center">
        <div className="card-body text-light division">
          <p className="card-title fw-6 font">Shop in style</p>
          <p className="card-text">With this shop hompeage template</p>
        </div>
      </div>
      <div className="container empty"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* maping product arrai to cart component to display items detail */}
              {product.map((product) => {
                return (
                  <Cart key={product.id}
                    product={product}
                    cartItems={cartitems}
                    handleCart={handleCart}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="card text-center">
          <div className="card-body text-light division1">
            <p className="card-title text-center mt-5">
              Copyright © Your Website 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;