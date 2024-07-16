import React from "react";

const RequestNewCurrency = ({ handleClose }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-[#1D1E28] p-8 rounded-lg w-96">
        <h2 className="text-white font-bold mb-4 text-center">Request New Currency</h2>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search country/currency"
            className="w-full py-2 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute top-2 right-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.414-1.414l4.3 4.3a1 1 0 01-1.414 1.414l-4.3-4.3zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full">
          Submit Request
        </button>
        <button
          onClick={handleClose}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg w-full mt-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RequestNewCurrency;
