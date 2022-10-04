import React from "react";
import "./cardstyles.css";
import baby from "../../img/rigo-baby.jpg";
const Card = () => {
  return (
    <div classNameName="">
      <div className="card">
        {/* <div className="card-header">
    Featured
  </div> */}
        <div className="card-body">
          <h5 className="card-firsttitle">A Warm Welcome!</h5>
          <p className="card-firsttext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget turpis at ligula aliquet dapibus vitae vel leo. Nunc aliquam
            molestie justo, sed sollicitudin nulla. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus
            suscipit lobortis leo vel tristique. Mauris eros leo, varius ac quam
            eu, porta pulvinar ligula. Vestibulum maximus ac ante vel maximus.
            Proin eleifend, mi non pharetra molestie, nunc ante scelerisque
            ante, tristique aliquet arcu lorem sit amet sem.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="">
        <div className="container text-center">
          <div className="row row-cols-4">
            <div className="col">
              <div classNameName="all-cards">
                <img src={baby} classNameName="card-img-top" alt="..." />
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div classNameName="all-cards">
                <img src={baby} classNameName="card-img-top" alt="..." />
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div classNameName="all-cards">
                <img src={baby} classNameName="card-img-top" alt="..." />
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div classNameName="all-cards">
                <img src={baby} classNameName="card-img-top" alt="..." />
                <div classNameName="card-body">
                  <h5 classNameName="card-title">Card title</h5>
                  <p classNameName="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" classNameName="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export { Card };
