import { Formik, Form } from 'formik';
import { InputFormik, SelectFormik } from '../../index';
import formSchema from './formSchema';

const SearchForm = () => {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik onSubmit={handleSubmit} {...formSchema}>
      <Form>
        <div className='md:flex md:justify-around md:items-end mt-5 w-full'>
          <div className='w-full md:pr-5'>
            <InputFormik
              label='Pesquisar'
              name='pesquisa'
              placeholder='Nome da empresa'
            />
          </div>
          <div className='flex flex-col w-full md:px-5'>
            <SelectFormik
              label='Estado'
              name='uf'
              data={[
                { value: 'Test', label: 'test' },
                { value: 'Test2', label: 'test2' },
              ]}
            />
          </div>
          <div className='flex flex-col w-full md:px-5'>
            <SelectFormik
              label='Empresa vinculada'
              name='empresa_vinculada'
              data={[
                { value: 'Test', label: 'test' },
                { value: 'Test2', label: 'test2' },
              ]}
            />
          </div>
          <div className='flex flex-col w-full md:px-5'>
            <SelectFormik
              label='Arrecadação'
              name='arrecadacao'
              data={[
                { value: 'Test', label: 'test' },
                { value: 'Test2', label: 'test2' },
              ]}
            />
          </div>
          <div className='flex flex-col w-full md:pl-5'>
            <SelectFormik
              label='Setor'
              name='setor'
              data={[
                { value: 'Test', label: 'test' },
                { value: 'Test2', label: 'test2' },
              ]}
            />
          </div>
        </div>
        <div className='flex w-full justify-end'>
          <button
            type='submit'
            className='mb-8 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-secondary-blue hover:bg-[#1289d9] focus:outline-none duration-500'
          >
            PESQUISAR
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchForm;
