import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AccountActions } from '../../../redux/account';
import { GeneralActions } from '../../../redux/general';
import { useSelector } from '../../../redux/hooks';
import Button from '../../Button';
import { InputFormik, SelectFormik } from '../../index';
import formSchema from './formSchema';

const Endereco = () => {
  const dispatch = useDispatch();
  const { general, account } = useSelector((state) => state);

  function handleSubmit(values) {
    delete values.confirmPassword;
    dispatch(
      AccountActions.registerAccountRequest({
        ...values,
        uf: general.uf.find((uf) => uf.value === values.uf).id,
        username: values.email,
      })
    );
  }

  useEffect(() => {
    dispatch(GeneralActions.getUfRequest());
  }, []);

  return (
    <Formik onSubmit={(values) => handleSubmit({ ...values })} {...formSchema}>
      <Form>
        <div className='flex px-10 pt-10'>
          <div className='md:col-span-2'>
            <div className='grid grid-cols-12 gap-x-6'>
              <div className='flex w-60 sm:w-full flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='cep' label='CEP' />
              </div>
              <div className='flex w-60 sm:w-full flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='logradouro' label='Logradouro' />
              </div>
              <div className='flex w-60 sm:w-full flex-col col-span-12 sm:col-span-7'>
                <InputFormik name='bairro' label='Bairro' />
              </div>
              <div className='flex w-60 sm:w-full flex-col col-span-12 sm:col-span-5'>
                <InputFormik name='cidade' label='Cidade' />
              </div>
              <div className='flex w-60 sm:w-full flex-col col-span-12 sm:col-span-12'>
                <InputFormik name='complemento' label='Complemento' />
              </div>
              <div className='col-span-12 w-60 sm:w-full sm:col-span-5'>
                <SelectFormik
                  name='telefone'
                  label='Telefone'
                  data={general.uf}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <Button title='Salvar' loading={account.loading} />
        </div>
      </Form>
    </Formik>
  );
};

export default Endereco;
