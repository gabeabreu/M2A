import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputFormik, SelectFormik } from '../components';
import Results from '../components/companies/Results';
import SearchForm from '../components/companies/SearchForm';
import Layout from '../components/Layout';

function Companies() {
  return (
    <Layout>
      <SearchForm />
      <Results />
    </Layout>
  );
}

export default Companies;
