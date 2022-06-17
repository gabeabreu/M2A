import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { AccountActions } from '../redux/account';
import { useSelector } from '../redux/hooks';

function Authentication() {
  const { account } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className='flex flex-col bg-gray-400 h-screen w-screen justify-center items-center'>
        <p>{`Loading Redux State: ${account.loading}`}</p>
        <button
          className='py-2 px-4 bg-green-200 rounded-lg'
          onClick={() => dispatch(AccountActions.getAccountRequest())}
        >
          Fake Request
        </button>
        {account.data && (
          <p>{`Return: ${account.data.name}  ${account.data.surname}`}</p>
        )}

        <h1 className='my-10 text-white text-2xl'>Authentication</h1>

        <Link to='companies'>
          <p className='text-blue-900 text-xl'>Companies</p>
        </Link>
        <Link to='questionnaires'>
          <p className='text-blue-900 text-xl'>Questionnaires</p>
        </Link>
        <Link to='diagnostics'>
          <p className='text-blue-900 text-xl'>Diagnostics</p>
        </Link>
        <Link to='users'>
          <p className='text-blue-900 text-xl'>Users</p>
        </Link>
      </div>
    </Layout>
  );
}

export default Authentication;
