import { Formik, Field, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AccountActions } from '../../../redux/account';
import { GeneralActions } from '../../../redux/general';
import { useSelector } from '../../../redux/hooks';
import Button from '../../Button';
import { InputFormik, SelectFormik } from '../../index';
import formSchema from '../EditForm/formSchema';

const AddForm = () => {
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
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='cnpj' label='CNPJ' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='razao_social' label='Razão social' />
              </div>

              <div className='flex flex-col col-span-12 sm:col-span-7'>
                <InputFormik name='fantasia' label='Fantasia' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-5'>
                <InputFormik
                  type='number'
                  name='num_empregados'
                  label='Número de empregados'
                />
              </div>

              <div className='flex flex-col col-span-12 sm:col-span-12'>
                <InputFormik
                  type='date'
                  name='dt_ano_inicio'
                  label='Ano de início'
                />
              </div>

              <div className='col-span-12 sm:col-span-5'>
                <InputFormik name='telefone' label='Telefone' />
              </div>
              <div className='col-span-12 sm:col-span-7'>
                <InputFormik
                  name='inscricao_estadual'
                  label='Inscrição estadual'
                />
              </div>

              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='fax' label='Fax' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='celular' label='Celular' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='ds_negocio' label='Descrição do negócio' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='missao' label='Missão' />
              </div>

              <div className='flex flex-col col-span-12 sm:col-span-7'>
                <InputFormik name='visao' label='Visão' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-5'>
                <InputFormik name='Valores' label='Valores' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <SelectFormik data={[]} name='grupo' label='Grupo' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <SelectFormik data={[]} name='segmento' label='Segmento' />
              </div>

              <div className='flex flex-col col-span-12 sm:col-span-7'>
                <SelectFormik data={[]} name='setor' label='Setor' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-5'>
                <SelectFormik
                  data={[]}
                  name='tipo_industria'
                  label='Tipo de indústria'
                />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <InputFormik name='faturamento' label='Faturamento' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-6'>
                <SelectFormik data={[]} name='projeto' label='Projeto' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-7'>
                <InputFormik name='endereco' label='Endereço' />
              </div>
              <div className='flex flex-col col-span-12 sm:col-span-5'>
                <SelectFormik
                  data={[]}
                  name='valor_arrecadacao'
                  label='Valor arrecadação'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <Button title='Criar Empresa' loading={account.loading} />
        </div>
      </Form>
    </Formik>
  );
};

export default AddForm;
