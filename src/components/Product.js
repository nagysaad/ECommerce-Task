import { Link } from "react-router-dom";

function Product(props){
    console.log(props);
    return(
        <>
        <div className="card">
  <img src={props.ele.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.ele.title}</h5>
    <p className="card-text">{props.ele.description}</p>
    <p>{props.ele.price}<span>$</span></p>

    {
     props.showButton && <Link href="#" className="btn btn-primary" to={`/product/${props.ele.id}`}>View Details</Link>
    }

  </div>
  </div>
        </>

    );
}

export default Product;