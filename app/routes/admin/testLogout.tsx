import React from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import { logoutUser } from '~/appwrite/auth';

function TestLougOut() {

  const user = useLoaderData();
  const navigate= useNavigate();

   const handleLogout =async () => {
      await logoutUser();
    navigate('/sign-in')

    }

  return (
    <>
    <div>TestLougOut</div>
    <button onClick={handleLogout} className='cursor-pointer'>
    <img src='/assets/icons/logout.svg' alt='logo' className='size-6' />
  </button>
  </>
  )
}

export default TestLougOut