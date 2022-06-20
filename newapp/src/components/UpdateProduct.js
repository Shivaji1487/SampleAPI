import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const UpdateProduct = () => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [category, setCategory] = React.useState("");
    const [company, setCompany] = React.useState("");
    const params =useParams();   
    const navigate= useNavigate();


    useEffect(()=>{
        
        getProductDetails();
    },[])
    
    const getProductDetails = async ()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.warn(result)
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    } 
    
    const updateProduct = async ()=>{
        
        console.log(name,price,category,company)
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'content-type':"application/json"
            }
        });
        result = await result.json()
        console.warn(result)
        navigate('/')
    }

    return (
        <div className="product">
            <h3>Update Product </h3>
            <input className="inputbox" type="text" placeholder="Enter Product Name" 
            value={name} onChange={(e)=>{setName(e.target.value)}}/>

            

            <input className="inputbox" type="text" placeholder="Enter Product Price" 
            value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            


            <input className="inputbox" type="text" placeholder="Enter Product Category" 
            value ={category} onChange={(e)=>{setCategory(e.target.value)}}/>

            

            <input className="inputbox" type="text" placeholder="Enter Product Company" 
            value ={company} onChange={(e)=>{setCompany(e.target.value)}}/>

            

            <button onClick={updateProduct} className="button"> UpdateProduct </button>
        </div>
    )
}
export default UpdateProduct;