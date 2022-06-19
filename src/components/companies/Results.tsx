import { Tab } from '@headlessui/react';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import Button from '../Button';
import InputFormik from '../InputFormik';
import Modal from '../Modal';
import AddForm from './AddForm';
import EditForm from './EditForm';

/* This example requires Tailwind CSS v2.0+ */
const company = [
  {
    nome: 'Lindsay Walton',
    empresa_vinculada: 'Front-end Developer',
    uf: 'lindsay.walton@example.com',
  },
  {
    nome: 'Lindsay Walton',
    empresa_vinculada: 'Front-end Developer',
    uf: 'lindsay.walton@example.com',
  },
  {
    nome: 'Lindsay Walton',
    empresa_vinculada: 'Front-end Developer',
    uf: 'lindsay.walton@example.com',
  },
  {
    nome: 'Lindsay Walton',
    empresa_vinculada: 'Front-end Developer',
    uf: 'lindsay.walton@example.com',
  },
  // More people...
];

const Results = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  return (
    <div className='mb-32'>
      <Modal
        showModal={editOpen}
        closeButton
        onCloseModal={() => setEditOpen(false)}
      >
        <div className='px-5 py-10'>
          <EditForm />
        </div>
      </Modal>
      <Modal
        showModal={addOpen}
        closeButton
        onCloseModal={() => setAddOpen(false)}
      >
        <div className='px-5 py-10'>
          <AddForm />
        </div>
      </Modal>
      <div className='sm:flex sm:items-center'></div>
      <div className='mt-8 flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 px-1 sm:px-0'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-2xl md:rounded-lg'>
              <div className='flex p-5 w-full justify-between items-center bg-gray-200'>
                <h2 className='ml-0 text-2xl font-medium'>Lista de empresas</h2>
                <div className='mr-0'>
                  <Button
                    onClick={() => setAddOpen(true)}
                    title='Cadastrar empresa'
                    color='#32c841'
                  />
                </div>
              </div>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50 w-full'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
                    >
                      Nome
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Empresa vinculada
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Estado
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                    >
                      Editar
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {company.map((person) => (
                    <tr key={person.nome}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {person.nome}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {person.empresa_vinculada}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {person.uf}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <button
                          className='text-main-blue'
                          onClick={() => setEditOpen(true)}
                        >
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
