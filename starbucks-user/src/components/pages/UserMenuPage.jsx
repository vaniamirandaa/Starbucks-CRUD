import UserMenuCard from './UserMenuCard';
// import useFetch from '../../hooks/useFetch';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchItemAsync } from '../../store/actions/actionCreator';


export default function MenuPage() {
    // const {data: categories} = useFetch("categories")

    // const getCategory = (categoryId) => {
    //     const category = categories.find((category) => category.id === categoryId);
    //     return category ? category.name : 'Unknown';
    // };

    const dispatch = useDispatch()
    const { items } = useSelector((state) => state.items)

    useEffect(() => {
        dispatch(fetchItemAsync())
        // dispatch(fetchCategoryAsync())
    }, [dispatch])

    return (
        <div>
        <h1 className="text-4xl font-bold mb-8 text-center m-10">Starbucks Menu</h1>
        <div className="flex justify-center">
            <section className="menu">
                <div className='grid grid-cols-5 m-20'>
                    {items.map((item) => (
                        <UserMenuCard
                            key={item.id}
                            item={item}
                            categoryName={item.Category.name}
                        />
                    ))}
                </div>
            </section>
        </div>
        </div>
    );
}