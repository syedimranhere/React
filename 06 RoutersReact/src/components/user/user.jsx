import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    let { userId } = useParams();
    return (
        <div className='justify-center flex w-full'>        <div className='bg-gray-900 text-white justify-center '>
            Helloo User #{userId}
        </div>
        </div>

    );
};

export default User;