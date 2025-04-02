import React, { useState, useEffect } from 'react';

const CreateButton = () =>{
    const [isCreateHovered, setIsCreateHovered] = useState(false);
    return(
        <div className="w-full flex justify-center py-4 bg-gray-700">
        <button
          onMouseEnter={() => setIsCreateHovered(true)}
          onMouseLeave={() => setIsCreateHovered(false)}
          className={`
            bg-blue-500 text-white py-3 px-6 rounded-md 
            transition-all duration-300 shadow-lg 
            hover:bg-blue-600
            ${isCreateHovered ? 'w-[300px] scale-105' : 'w-[250px]'}
            `}
            >
          Create
        </button>
      </div>
    )
        }

        export default CreateButton;