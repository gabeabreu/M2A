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
        <div className='md:flex mt-5'>
          <InputFormik name='pesquisa' placeholder='Pesquisar' />
          <SelectFormik
            name='uf'
            label='Estado'
            data={[
              { name: 'Test', key: 'test' },
              { name: 'Test2', key: 'test2' },
            ]}
          />
          <SelectFormik
            vertical
            name='empresa_vinculada'
            label='Empresa vinculada'
            data={[
              { name: 'Test', key: 'test' },
              { name: 'Test2', key: 'test2' },
            ]}
          />
          <SelectFormik
            name='arrecadacao'
            label='Arrecadação'
            data={[
              { name: 'Test', key: 'test' },
              { name: 'Test2', key: 'test2' },
            ]}
          />
          <SelectFormik
            name='setor'
            label='Setor'
            data={[
              { name: 'Test', key: 'test' },
              { name: 'Test2', key: 'test2' },
            ]}
          />
        </div>
        <div className='mt-5'>
          <button
            type='submit'
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-secondary-blue hover:bg-[#1289d9] focus:outline-none duration-500'
          >
            PESQUISAR
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchForm;
