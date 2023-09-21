import React from 'react';
import { Link , useNavigate } from "react-router-dom";

const User = ({users}) => {

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`user/${id}`);
  }

    return (
      <div className=''>
        <div className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our Users
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
                vitae elementum enim vitae ullamcorper suspendisse.
              </p>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {users.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.email}
                      </p>
                      <button className='btn btn-sm text-xs' onClick={()=>handleClick(person.id)}>Show Details</button>
                     
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        )
      </div>
    );
};

export default User;