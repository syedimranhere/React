import React from "react";

export default function Card({
  title = "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  image = "https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  price = "$599",
  rating = 4.0,
  maxStars = 5,
}) {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const emptyStars = maxStars - fullStars;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <Star key={`full-${i}`} filled />
          ))}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <Star key={`empty-${i}`} />
          ))}
      </>
    );
  };

  return (
    <div className="card-theme w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
      <a href="/">
        <img
          className="p-4 rounded-t-lg"
          src={image}
          alt="product_image"
        />
      </a>
      <div className="px-1 pb-3">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-4">
          {renderStars()}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

function Star({ filled = false }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-yellow-300" : "text-gray-300 dark:text-gray-600"} mr-1`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
      aria-hidden="true"
    >
      <path d="M20.924 7.625a1.523 1.523 0 00-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 00-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 001.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 002.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 002.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 00.387-1.575z" />
    </svg>
  );
}
