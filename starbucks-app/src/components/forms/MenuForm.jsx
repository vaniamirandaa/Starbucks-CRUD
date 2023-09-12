/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addItemAsync, editItemAsync } from '../../store/actions/actionCreator';

export default function MenuForm() {
    const [formValues, setFormValues] = useState({
        name: "",
        categoryId: "",
        price: "",
        description: "",
        imgUrl: "",
        ingredients: [{ id: 1, name: "" }]
    });

    const navigate = useNavigate()

    const { data: categories } = useFetch("categories");

    let { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/items/${id}`,{
                headers: {
                    'access_token': localStorage.getItem("access_token")
                }
            })
            .then(response => response.json())
            .then(data => {
                const ingredients = data.Ingredients.map(ingredient => ingredient.name);
                
                setFormValues({
                    name: data.name,
                    categoryId: data.categoryId,
                    price: data.price,
                    description: data.description,
                    imgUrl: data.imgUrl,
                    ingredients: ingredients.map((ingredient, index) => ({ id: index + 1, name: ingredient })),
                });
            })
            .catch(console.error);
        }
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((formValues) => ({
            ...formValues,
            [name]: value
        }));
    };

    const handleIngredients = (event, index) => {
        const updatedIngredients = [...formValues.ingredients];
        updatedIngredients[index] = { ...updatedIngredients[index], name: event.target.value };
        setFormValues((formValues) => ({
            ...formValues,
            ingredients: updatedIngredients
        }));
    };
    
    const addNewIngredients = () => {
        const newIngredientId = formValues.ingredients.length + 1;
        setFormValues((formValues) => ({
            ...formValues,
            ingredients: [...formValues.ingredients, { id: newIngredientId, name: "" }]
        }));
    };

    const removeIngredients = (index) => {
        const updatedIngredients = [...formValues.ingredients];
        updatedIngredients.splice(index, 1);
        setFormValues((formValues) => ({
            ...formValues,
            ingredients: updatedIngredients
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const productData = {
            ...formValues,
            categoryId: parseInt(formValues.categoryId),
        };
        
        if (id) {
           await dispatch(editItemAsync(id, productData));
        } else {
           await dispatch(addItemAsync(productData));
        }
        setFormValues({
            name: '',
            categoryId: '',
            price: '',
            description: '',
            imgUrl: '',
            ingredients: [{ id: 1, name: "" }]
        });
        navigate('/menus');

    };


    return (
        <>
            <section className="justify-center items-center m-20 w-90">
                <div className="form-container bg-white p-8 rounded-lg shadow-lg w-full border border-gray-300">
                  <form onSubmit={handleSubmit}>
                      <h2 className="text-2xl font-semibold mb-4 text-center">
                          { id ? 'Edit Product' : 'Add Product'}
                      </h2>
                      
                      <label htmlFor="name" className="block mb-2 font-medium text-left">
                        Product Name<span className="text-red-500">*</span>
                        </label>
                      <input type="text" id="name" name="name" value={formValues.name} onChange={handleInputChange} required className="w-full border rounded-lg px-4 py-2 mb-4" />
                      <label htmlFor="categoryId" className="block mb-2 font-medium text-left">
                        Category <span className="text-red-500">*</span>
                        </label>
                      <select id="categoryId" name="categoryId" value={formValues.categoryId} onChange={handleInputChange} required className="w-full border rounded-lg px-4 py-2 mb-4">
                          <option value="">Select a category</option>
                          {categories.map(category => (
                              <option key={category.id} value={category.id}>{category.name}</option>
                          ))}
                      </select>
                      <label htmlFor="price" className="block mb-2 font-medium text-left">
                        Price<span className="text-red-500">*</span>
                        </label>
                      <input type="text" id="price" name="price" value={formValues.price} onChange={handleInputChange} required className="w-full border rounded-lg px-4 py-2 mb-4" />
                      <label htmlFor="description" className="block mb-2 font-medium text-left">
                        Description<span className="text-red-500">*</span>
                        </label>
                      <textarea id="description" name="description" rows="4" value={formValues.description} onChange={handleInputChange}  className="w-full border rounded-lg px-4 py-2 mb-4"></textarea>
                      <label htmlFor="imgUrl" className="block mb-2 font-medium text-left">
                        Image URL<span className="text-red-500">*</span>
                        </label>
                      <input type="text" id="imgUrl" name="imgUrl" value={formValues.imgUrl} onChange={handleInputChange}  className="w-full border rounded-lg px-4 py-2 mb-4" />
                      
                 {formValues.ingredients.map((ingredient, index) => (
                <div key={ingredient.id} className="flex items-center mb-2">
                    <label htmlFor={`ingredient${index}`} className="block flex-grow-0 flex-shrink-0 mb-2 font-medium mr-10">
                        Ingredient {index + 1}<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id={`ingredient${index}`}
                        name={`ingredient${index}`}
                        value={ingredient.name}
                        onChange={(event) => handleIngredients(event, index)}
                        className="w-full border rounded-lg px-4 py-2 mr-2"
                    />
                    <button
                        type="button"
                        onClick={() => removeIngredients(index)}
                        className="font-bold text-red-600 hover:text-red-800 ml-5"
                    >
                        Remove
                    </button>
                </div>
            ))}
                      <div className="flex">
                        <button
                            type="button"
                            onClick={addNewIngredients}
                            className="font-bold bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400 mt-10"
                        >
                            Add Ingredient
                        </button>

                        <button
                            type="submit"
                            className="font-bold bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-800 mt-10 ml-10"
                        >
                            {id ? 'Save Changes' : 'Add Product'}
                        </button>
                        </div>
                  </form>
              </div>
          </section>
        </>
      )
}
