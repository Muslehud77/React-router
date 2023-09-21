import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetail = () => {
const user = useLoaderData()
const navigate = useNavigate()

const handleClick = () => {
    navigate(-1)
}

    return (
      <div className="-mt-12">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md space-y-2">
              <h1 className="text-5xl font-bold">{user.name}</h1>
              <p>
                {" "}
                <span className="font-bold">Company</span> : {user.company.name}{" "}
              </p>
              <p>
                <span className="font-bold">Address:</span>{" "}
                {user.address.street}
              </p>
              <p>
                <span className="font-bold">email:</span> {user.email}
              </p>
              <p>
                <span className="font-bold">Phone:</span> {user.phone}
              </p>

              <button onClick={handleClick} className="btn btn-primary">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserDetail;