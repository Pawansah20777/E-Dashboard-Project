import React,{ useEffect, useState} from "react";
import {useParams,useNavigate} from "react-router-dom"

const UpdateProduct =()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const navigate = useNavigate();
    const params=useParams();

   useEffect(()=>{
     getProductDetails()
   },[])

   const getProductDetails = async()=>{
    console.log(params)
    let result=await fetch(`http://localhost:5000/product/${params.id}`)
    result=await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
   }

   const updateProduct = async()=>{
   console.log(name,price,category,company)
   let result=await fetch(`http://localhost:5000/product/${params.id}`,{
    method:'put',
    body: JSON.stringify({name,price,category,company}),
    headers: {'Content-Type':'application/json' },
    });
    result=await result.json();
    console.log(result)
    navigate('/')
    }

    return(
        <div className="product">
           <h1>Update Product</h1>
           <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter product name"/>
           <input className="inputbox" type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="Enter product price"/>
           <input className="inputbox" type="text"value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter product category"/>
           <input className="inputbox" type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter product company"/>
           <button className="appButton" type="button" onClick={updateProduct}>Update Product</button>
        </div>
    )
}

export default UpdateProduct;