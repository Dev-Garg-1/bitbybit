import React from 'react';

const Popup = ({ message, onClose, onRequest }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-semibold mb-4">New Project Available!</h2>
        <p className="text-gray-700">{message}</p>
        <div className="mt-4 flex justify-around">
          <button onClick={onRequest} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Request</button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
