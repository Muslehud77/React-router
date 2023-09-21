import React from 'react';
import {useLoaderData} from 'react-router-dom'
import User from '../User/User';

const Users = () => {

const users = useLoaderData()

    return (
      <div className=''>
        <h2  className='text-3xl bg-white font-semibold text-center '>Users {users.length}</h2>
        <User users={users}></User>
      </div>
    );
};

export default Users;