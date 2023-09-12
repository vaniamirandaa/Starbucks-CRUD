/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { formatCurrency } from "../../helpers/currency";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItemAsync } from "../../store/actions/actionCreator";
 
export default function MenuCard({
    item,
    categoryName,
    authorName,
}) {
    const [itemDetails, setItemDetails] = useState(null);
    const [editItem, setEditItem] = useState(null);

    const dispatch = useDispatch();

    const handleDetailsClick = () => {
        setItemDetails(item.id)
    };

    const handleDeleteClick = async (itemId) => {
        await dispatch(deleteItemAsync(itemId));
    };

    const handleEditClick = () => {
        setEditItem(item.id);
    };

    return (
        <>
        <tr>
            <td className="border-b border-gray-300 p-5">{item.id}.</td>
            <td className="border-b border-gray-300 font-bold text-left pr-10">{item.name}</td>
            <td className="border-b border-gray-300 p-5">{formatCurrency(item.price)},-</td>
            <td className="border-b border-gray-300 text-left pl-10">{item.description}</td>
            <td className="border-b border-gray-300 p-5 ">{categoryName}</td>
            <td className="border-b border-gray-300 pl-10 pr-10">{authorName}</td>
            <td className="border-b border-gray-300 m-10 p-5">
                <div className="flex justify-center">
                    <img src={item.imgUrl} alt={item.name} className="h-50 w-50 object-cover rounded-full" />
                </div>
            </td>

            <td className="border-b border-gray-300 space-x-2 p-10">
                
                <>
                    <div className="flex space-x-2">

                        
                        <Link to={`/menu-form/${item.id}`} onClick={handleEditClick} className="text-blue-500 font-bold">
                            Edit
                        </Link>
                        <Link to={`/details/${item.id}`} onClick={handleDetailsClick} className="text-green-500 font-bold">
                            Details
                        </Link>
                        <button onClick={() => handleDeleteClick(item.id)} className="text-red-500 font-bold">
                            Delete
                        </button>
                    </div>
                </>
            </td>
        </tr>
        </>
    );

}
