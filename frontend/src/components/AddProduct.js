import React,{ useState} from "react";

const AddProduct =()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const [error,setError] = useState(false);

   const addProduct = async()=>{
    console.log(!name,!price,!category,!company)
     if(!name || !price || !category || !company){
         setError(true);
         return false;
     }

        console.log(name,price,category,company);
        const userId= JSON.parse(localStorage.getItem("user"))._id;
        let result=await fetch('http://localhost:5000/add-product',{
            method:'post',
            body: JSON.stringify({name,price,category,company,userId}),
            headers: {'Content-Type':'application/json' },
            });
        result=await result.json();
        console.log(result)
    }

    return(
        <div className="product">
           <h1>Add Product</h1>
           <input className="inputbox" type="text" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Enter product name"/>
           {error && !name && <span className="invalid-input">Enter Valid Name</span>}
           <input className="inputbox" type="text" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="Enter product price"/>
           {error && !price && <span className="invalid-input">Enter Valid Price</span>}
           <input className="inputbox" type="text"value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Enter product category"/>
           {error && !category && <span className="invalid-input">Enter Valid Category</span>}
           <input className="inputbox" type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder="Enter product company"/>
           {error && !company && <span className="invalid-input">Enter Valid Company</span>}
           <button className="appButton" type="button" onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;