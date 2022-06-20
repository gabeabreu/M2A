import { Tab } from "@headlessui/react";
import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AccountActions } from "../../redux/account";
import { CompaniesActions } from "../../redux/companies";
import { Company } from "../../redux/companies/types";
import { GeneralActions } from "../../redux/general";
import { useSelector } from "../../redux/hooks";
import Button from "../Button";
import { InputFormik, SelectFormik } from "../index";
import DadosDaEmpresa from "./DadosDaEmpresa";
import Endereco from "./Endereco";
import InformacoesComplementares from "./InformacoesComplementares";

interface Props {
  closeForm: () => any;
}

const EditForm = ({ closeForm }: Props) => {
  const dispatch = useDispatch();
  const { general, account, companies } = useSelector((state) => state);

  const empty = companies.editCompany ? false : true;

  const [activeTab, setActiveTab] = useState<number>(0);
  const [tabs, setTabs] = useState([
    { name: "Dados da Empresa", mobileName: "1", id: 0, active: true },
    { name: "Endereço", mobileName: "2", id: 1, active: !empty ? true : false },
    {
      name: "Informações Complementares",
      mobileName: "3",
      id: 2,
      active: !empty ? true : false,
    },
  ]);

  function handleNextTab() {
    let newTabs = [...tabs];
    newTabs[activeTab + 1].active = true;
    setActiveTab(activeTab + 1);
    console.log(newTabs);
    setTabs(newTabs);
  }

  function handleSubmit() {
    dispatch(CompaniesActions.registerCompanyRequest(companies.editCompany));
    closeForm();
  }

  const [isMobileScreen, setIsMobileScreen] = useState<boolean>();

  const updateMedia = () => {
    setIsMobileScreen(window.innerWidth < 640);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia, { passive: true });
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="sm:mx-12 mx-5 mt-8 mb-10">
      <Tab.Group selectedIndex={activeTab}>
        <Tab.List className="flex border-b-[1px] sm:mx-10 space-x-9 sm:space-x-0 justify-center sm:justify-between bg-white">
          {tabs.map((tab) => (
            <Tab
              className={`${
                !tabs.find((t) => t.id === tab.id).active
                  ? "text-gray-400"
                  : tab.id === activeTab
                  ? "text-secondary-blue py-2 border-b border-secondary-blue"
                  : ""
              } font-medium`}
              disabled={!tabs.find((t) => t.id === tab.id).active}
              onClick={() => setActiveTab(tab.id)}
            >
              {isMobileScreen ? tab.mobileName : tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <DadosDaEmpresa changeTab={handleNextTab} />
          </Tab.Panel>

          <Tab.Panel>
            <Endereco changeTab={handleNextTab} />
          </Tab.Panel>

          <Tab.Panel>
            <InformacoesComplementares onSubmit={handleSubmit} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    // <Formik onSubmit={(values) => handleSubmit({ ...values })} {...formSchema}>
    //   <Form>
    //     <div className='flex px-10 pt-10'>
    //       <div className='md:col-span-2'>
    //         <div className='grid grid-cols-12 gap-x-6'>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='cnpj' label='CNPJ' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='razao_social' label='Razão social' />
    //           </div>

    //           <div className='flex flex-col col-span-12 sm:col-span-7'>
    //             <InputFormik name='fantasia' label='Fantasia' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-5'>
    //             <InputFormik
    //               name='num_empregados'
    //               label='Número de empregados'
    //             />
    //           </div>

    //           <div className='flex flex-col col-span-12 sm:col-span-12'>
    //             <InputFormik name='dt_ano_inicio' label='Ano de início' />
    //           </div>

    //           <div className='col-span-12 sm:col-span-5'>
    //             <SelectFormik
    //               name='telefone'
    //               label='Telefone'
    //               data={general.uf}
    //             />
    //           </div>
    //           <div className='col-span-12 sm:col-span-7'>
    //             <SelectFormik
    //               name='inscricao_estadual'
    //               label='Inscrição estadual'
    //               data={[
    //                 { label: 'Analfabeto', value: 'analfabeto' },
    //                 { label: 'Primeiro grau', value: 'primeiro grau' },
    //                 { label: 'Segundo grau', value: 'segundo grau' },
    //                 { label: 'Superior', value: 'superior' },
    //                 { label: 'Pós-graduação', value: 'pos graduacao' },
    //                 {
    //                   label: 'Mestrado e/ou Doutorado',
    //                   value: 'mestrado ou doutorado',
    //                 },
    //               ]}
    //             />
    //           </div>

    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='fax' label='Fax' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='celular' label='Celular' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='ds_negocio' label='Descrição do negócio' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='missao' label='Missão' />
    //           </div>

    //           <div className='flex flex-col col-span-12 sm:col-span-7'>
    //             <InputFormik name='visao' label='Visão' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-5'>
    //             <InputFormik name='Valores' label='Valores' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='grupo' label='Grupo' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='segmento' label='Segmento' />
    //           </div>

    //           <div className='flex flex-col col-span-12 sm:col-span-7'>
    //             <InputFormik name='setor' label='Setor' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-5'>
    //             <InputFormik name='tipo_industria' label='Tipo de indústria' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='faturamento' label='Faturamento' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-6'>
    //             <InputFormik name='projeto' label='Projeto' />
    //           </div>

    //           <div className='flex flex-col col-span-12 sm:col-span-7'>
    //             <InputFormik name='endereco' label='Endereço' />
    //           </div>
    //           <div className='flex flex-col col-span-12 sm:col-span-5'>
    //             <InputFormik
    //               name='valor_arrecadacao'
    //               label='Valor arrecadação'
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className='mt-5'>
    //       <Button title='Salvar' loading={account.loading} />
    //     </div>
    //   </Form>
    // </Formik>
  );
};

export default EditForm;
