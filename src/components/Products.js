
import { useEffect , useState } from "react";
import { ColorRing } from "react-loader-spinner";
import "./products.css";

import Product from "./Product";

function Products(){
    const api_url = "https://fakestoreapi.com/products";
    const [products , setProducts] = useState([]);
    const [categories , setCategories] = useState([]);
    const [loading , setLoading] = useState(true);
    const [filterLoading , setFilterLoading] = useState(false);

    
   


    const getAllProducts = () => {
        fetch(api_url)
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        });
        ;
   } 

   const getAllCategories = () => {
    setFilterLoading(true);
    fetch(`${api_url}/categories`)
    .then((res) => res.json())
    .then((data) => {
        setCategories(data);
        setFilterLoading(false);
        
    });
    
} 

const getSpecificCategory = (catName) => {
    setFilterLoading(true);
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
    .then((res) => res.json())
    .then(data => {
        setProducts(data);
        setFilterLoading(false);
       
       
    })
    
    
    
}
    

    useEffect (() => { 
        getAllProducts();
        getAllCategories();
        
       

    } , []) 

    if(loading){
        return (
            <div className=" loader d-flex justify-content-center">
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
        <h2 className="heading text-center p-3">Our Products</h2>
        <div className="container">
            <button className="btn btn-primary m-1 " onClick={() => {
                getAllProducts();
            }}>All</button>
            {
                categories.map((cat) => {
                    return <button key={cat} className="btn btn-info m-1 " onClick={() => {
                        getSpecificCategory(cat);
                    }} > {cat} </button>
                })
            }
           {
            filterLoading ?  <div className=" loader d-flex justify-content-center">
            <ColorRing
visible={true}
height="120"
width="120"
ariaLabel="color-ring-loading"
wrapperStyle={{}}
wrapperClass="color-ring-wrapper"
colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
        </div>  :  <div className="row mt-3">
            {products.map((ele) => {
                return(
                    <div className="products col-sm-12 col-md-6 col-lg-3 mb-3 mt-3" key={ele.id}>
                    <Product  ele={ele} showButton={true} />
                   </div>

                )
            })}
            
        </div> 
           }
        </div>

        </>
    )
}

export default Products;