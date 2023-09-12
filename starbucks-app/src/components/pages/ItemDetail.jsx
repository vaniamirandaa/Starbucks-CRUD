import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemDetail } from '../../store/actions/actionCreator';
import { formatCurrency } from "../../helpers/currency";

export default function ItemDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { item, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    if (id) {
      dispatch(fetchItemDetail(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!item) {
    return <div>No item details available</div>;
  }

  return (
    <div className="h-screen">
      {loading ? (
        <div className="flex items-center justify-center h-full">Loading...</div>
      ) : (
        <div className="bg-white mx-auto max-w-screen-lg p-8 rounded-lg shadow-md pt-5">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <img
              src={item.imgUrl}
              alt="Product"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl font-semibold mb-4 text-left">{item.name}</h1>
            <p className="text-xl font-medium mb-2 text-left">
              {formatCurrency(item.price)}
            </p>
            <p className="text-gray-600 mb-4 text-left">{item.description}</p>
             <div className="mb-4">
              <p className="text-gray-600 text-left">Ingredients:</p>
              <div className="ingredient-list text-gray-600 text-left">
                {item.Ingredients.map((ingredient, index) => (
                  <span key={ingredient.id}>
                    {ingredient.name}
                    {index !== item.Ingredients.length - 1 && ', '}
                  </span>
                ))}
              </div>

            </div>

            <button className="bg-green-900 font-bold text-white py-2 px-4 rounded-md hover:bg-green-600 m-6">
              Add to Cart
            </button>
            <p className="text-gray-600 mb-4 text-left mt-20">Posted by: {item.User.username}</p>
          </div>
        </div>
      </div>
 )}
 </div>
);
}

