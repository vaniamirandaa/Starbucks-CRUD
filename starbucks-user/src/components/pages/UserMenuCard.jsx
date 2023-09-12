/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { formatCurrency } from "../../helpers/currency";
import { Link } from "react-router-dom";

export default function MenuCard({
  item,
  categoryName,
}) {
  return (

    <div className="relative rounded-lg border border-gray-200 shadow-md hover:shadow-lg w-64 h-76 mt-1 m-10 bg-white">
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-full h-50 object-cover"
      />
      <div className="card-content p-4">
        <h3 className="card-title text-lg font-semibold text-gray-800 mb-2">
          {item.name}
        </h3>
        <p className="card-price text-green-600 font-medium text-lg mb-2">
          {formatCurrency(item.price)}
        </p>
        <p className="card-category text-sm text-gray-500 mb-4">{categoryName}</p>
        <Link
          to={`/details/${item.id}`}
          className="detail-button font-semibold bg-green-900 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300"
        >
          Details
        </Link>
      </div>
    </div>
  );
  
}
