import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error,setError] = React.useState(false)

    const addProduct = async () => {

console.log(!name);
if(!name || !price || !category || !company)
{
setError(true)
    return false;
}

        

        const userId = JSON.parse(localStorage.getItem('user'))._id;

        try {
            const response = await fetch("http://localhost:3500/add-product", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, price, category, company, userId }),
            });

            const result = await response.json();

            // Handle the response from the server
            if (response.ok) {
                console.log('Product added successfully:', result);
                // Optionally reset form fields
                setName('');
                setPrice('');
                setCategory('');
                setCompany('');
            } else {
                console.error('Error adding product:', result);
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };

    return (
        <div className="product">
            <h1>Add Product</h1>

            <input
                type="text"
                placeholder="Enter Product Name"
                className="inputbox"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
{error && !name && <span className="span">Enter valid name</span>}


            <input
                type="text"
                placeholder="Enter Product Price"
                className="inputbox"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price&& <span className="span">Enter valid price</span>}

            <input
                type="text"
                placeholder="Enter Product Category"
                className="inputbox"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
{error && !category&& <span className="error">Enter valid category</span>}

            <input
                type="text"
                placeholder="Enter Product Company"
                className="inputbox"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
{error && !company&& <span className="error">Enter valid company</span>}

            <button onClick={addProduct} className="button">
                Add Product
            </button>
        </div>
    );
};

export default AddProduct;
