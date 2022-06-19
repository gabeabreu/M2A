import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputFormik, SelectFormik } from '../components';
import SearchForm from '../components/companies/SearchForm';
import Layout from '../components/Layout';

const tabs = [
  { name: 'LISTA', id: 0 },
  { name: 'CADASTRO', id: 1 },
  { name: 'EDIÇÃO', id: 2 },
];

function Companies() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Layout>
      <div className='bg-[#C4C4C4] p-3'>
        <h1 className='text-[#004975] mb-7 font-semibold text-2xl'>Empresas</h1>
        <Tab.Group>
          <Tab.List className='space-x-9 flex justify-center bg-white p-2'>
            {tabs.map((tab) => (
              <Tab
                className={`${
                  tab.id === activeTab
                    ? 'text-secondary-blue border-b border-main-blue'
                    : ''
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div>
                <SearchForm />
                <div>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <button></button>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>222</Tab.Panel>
            <Tab.Panel>333</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </Layout>
  );
}

export default Companies;
