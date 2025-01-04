
import Product from "./Product";
import { useState , useEffect } from "react";

import {  useParams } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import "./productDetails.css";

function ProductDetails(){
    const api = "https://fakestoreapi.com/products";
    const [product , setProduct] = useState({});
    const params = useParams() ; 
    const [loading , setLoading] = useState(true);

    

    useEffect(() => {
        fetch(`${api}/${params.productId}`)
        .then((res) => res.json())
        // .then(json => console.log(json));
        .then((data) => {
            setProduct(data);
            setLoading(false);
        });
      

    } , [])

    

    if(loading){
        return (
            <div className=" loader d-flex justify-content-center align-items-center">
                <ColorRing
  visible={true}
  height="120"
  width="120"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
            </div>
        )
        
    }
    return(
        <>
        <div className="productDetails">
        <Product ele={product} showButton={false}/>
        </div>
        
        
        </>
        

    )
}

export default ProductDetails;
