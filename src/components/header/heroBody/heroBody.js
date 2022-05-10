import { Component } from "react";
import "./heroBody.css";
import img from "./heroImg/img.png";
import img1 from "./heroImg/work1.png";

class heroBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    const add = () => {
      this.setState({ count: (this.state.count += 1) });
    };
    const minus = () => {
      if (this.state.count == 1) {
        this.setState({ count: (this.state.count = 1) });
      } else {
        this.setState({ count: (this.state.count -= 1) });
      }
    };

    return (
      <div className="hero-body">
        <div className="hero-left-part">
          <div className="hero-img">
            <img src={img} alt="" />
          </div>
          <div className="hero-img-about">
            <div className="hero-about-top">
              <p>MOTT'S</p>
              <h4>MOTT'S Unsweetened Applesauce</h4>
              <p>
                Pack size: <h6>24/16.09 oz</h6>
              </p>
              <p>
                the main body of a book or other piece of writing, as distinct
                from other material such as notes, appendices, and
                illustrations.
              </p>
              <p>
                <i className="bx bx-cloud-download"></i>
                <a href="#"> Download Spec Sheet</a>
              </p>
            </div>
            <div className="hero-price-bottom">
              <h4>
                ${this.state.count * 32}/Cs ($0.21/oz) ${this.state.count * 730}{" "}
                / Pit
              </h4>
              <p>
                from other material such as notes, appendices, and
                illustrations.
              </p>
              <div className="price-btns-con-hero">
                <div className="add-pice-hero">
                  <p>{this.state.count}</p>
                  <div className="btns-add">
                    <button onClick={add} className="btn btn-white">
                      +
                    </button>
                    <button onClick={minus} className="btn btn-white">
                      -
                    </button>
                  </div>
                </div>
                <button className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2">
                  <i className="bx bxs-cart-alt"></i>
                  <span>Card</span>
                </button>
                <button className="btn btn-outline-white d-flex align-items-center justify-content-center gap-2">
                  <i className="bx bxs-wrench"></i>
                  <span>Costum Pannel</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-cards-container">
          <img src={img1} alt="" />
          <img src={img1} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
    );
  }
}

export default heroBody;
