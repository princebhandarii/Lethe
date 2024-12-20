import React from "react";
import Product1 from "../Photos/p1.jpeg";
import Product2 from "../Photos/p2.jpeg";
import Product3 from "../Photos/p3.jpeg";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="text-center">
      <h1 className="btn btn-ghost text-xl lg:text-4xl parkinsans">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-8">
        <div className="card bg-base-100 w-80 lg:w-96 shadow-xl">
          <figure>
            <img src={Product1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center">
              <Link to="/ContactUs">
                <button className="btn btn-primary">Enquire</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 lg:w-96 shadow-xl">
          <figure>
            <img src={Product2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center">
              <Link to="/ContactUs">
                <button className="btn btn-primary">Enquire</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-80 lg:w-96 shadow-xl">
          <figure>
            <img src={Product3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-center">
              <Link to="/ContactUs">
                <button className="btn btn-primary">Enquire</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
