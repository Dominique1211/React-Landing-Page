import React from "react";
import "./cardstyles.css";
import baby from "../../img/rigo-baby.jpg"
const Card = ()=>{
    return (
        <div>
            <div class="card">
  {/* <div class="card-header">
    Featured
  </div> */}
  <div class="card-body">
    <h5 class="card-firsttitle">A Warm Welcome!</h5>
    <p class="card-firsttext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis at ligula aliquet dapibus vitae vel leo. Nunc aliquam molestie justo, sed sollicitudin nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus suscipit lobortis leo vel tristique. Mauris eros leo, varius ac quam eu, porta pulvinar ligula. Vestibulum maximus ac ante vel maximus. Proin eleifend, mi non pharetra molestie, nunc ante scelerisque ante, tristique aliquet arcu lorem sit amet sem.</p>
    <a href="#" class="firstbutton">Go somewhere</a>
  </div>
</div>
    <div className="card w-25 p-3">
  <img src={baby} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    )
}
export {Card}