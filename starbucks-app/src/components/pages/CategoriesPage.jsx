import { useState, useEffect } from 'react';
import { addCategoryAsync, deleteCategoryAsync, fetchCategoryAsync } from '../../store/actions/actionCreator';
import { useDispatch, useSelector } from 'react-redux';

export default function CategoriesPage() {
  const [formValues, setFormValues] = useState({
    name: '',
  });

  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategoryAsync());
  }, []);

  const handleDeleteCategory = async (id) => {
    await dispatch(deleteCategoryAsync(id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(addCategoryAsync(formValues));
    setFormValues({
      name: '',
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gray-100">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="w-[500px] relative px-4 py-10 bg-white mx-8 md:mx-auto shadow rounded-3xl sm:p-10 width-90">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold">Manage Categories</h2>
              <p className="text-sm text-gray-500 font-normal">
                Add or Delete Categories
              </p>
            </div>
            <div className="divide-y divide-gray-200 mt-4">
              {loading ? (
                <div className="py-4 text-center">Loading...</div>
              ) : (
                categories.map((category) => (
                  <div key={category.id} className="py-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold">{category.name}</h2>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="py-4">
              <form>
                <div className="flex">
                  <input
                    type="text"
                    id="categoryName"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Category Name"
                  />
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-green-900 text-white ml-4 px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Add Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
