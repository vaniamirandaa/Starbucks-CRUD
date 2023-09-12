/* eslint-disable no-unused-vars */
import MenuCard from './MenuCard';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchItemAsync } from '../../store/actions/actionCreator';

export default function MenuPage() {
    const { fetchingData } = useFetch('items');

    const dispatch = useDispatch()
    const { items, loading, error } = useSelector((state) => state.items);

    useEffect(() => {
        dispatch(fetchItemAsync())
    }, [dispatch])
    
   


    return (
        <>
        <section className="menu bg-white">
            <div className="container mx-auto px-4 py-8" style={{ width: '80%' }}>
                <h1 className="text-4xl font-bold mb-8 text-center m-10">Starbucks Menu</h1>
                <div className="text-center mt-4">
                    <button className="add-button font-bold bg-green-900 text-white py-2 px-4 rounded hover:bg-green-700">
                        <Link to="/menu-form">Add Menu</Link>
                    </button>
                </div>
                <div className="overflow-x-auto mt-10">
                    {loading ? (
                        <div className="text-center text-gray-600 py-4">
                            Loading...
                        </div>
                    ) : (
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-300">
                        <th className="px-6 py-2">No</th>
                        <th className="px-6 py-2">Name</th>
                        <th className="px-6 py-2">Price</th>
                        <th className="px-3 py-2">Description</th>  
                        <th className="px-6 py-2">Category</th>
                        <th className="px-6 py-2">By</th>
                        <th className="px-6 py-2">Images</th>  
                        <th className="px-20 py-2">Action</th>  
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                        <MenuCard
                            key={item.id}
                            item={item}
                            categoryName={item.Category.name}
                            authorName={item.User.username}
                            fetchingData={fetchingData}
                            
                        />
                    ))}
                    </tbody>
                </table>
                )}
            </div>
        </div>
    </section>
    </>
    );
}
