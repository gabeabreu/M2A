import { Formik, Form } from 'formik';
import { InputFormik } from '../../index';
import formSchema from './formSchema';

const EditForm = () => {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik onSubmit={handleSubmit} {...formSchema}>
      <Form>
        <div className='mt-5 w-full'>
          <div className='w-full md:p-5 xl:p-5'>
            <InputFormik name='nome' label='Nome' />
          </div>
          <div className='w-full md:p-5 xl:p-5'>
            <InputFormik name='empresa_vinculada' label='Empresa vinculada' />
          </div>
          <div className='w-full md:p-5 xl:p-5'>
            <InputFormik name='uf' label='Estado/UF' />
          </div>
        </div>
        <div className='flex w-full justify-end p-5'>
          <button
            type='submit'
            className='mb-14 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-secondary-blue hover:bg-[#1289d9] focus:outline-none duration-500'
          >
            Atualizar
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditForm;
