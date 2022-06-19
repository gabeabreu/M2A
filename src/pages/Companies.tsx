import { Tab } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Companies() {
  return (
    <Layout>
      <div className="bg-[#C4C4C4]">
        <h1 className="text-[#004975] font-semibold text">Empresas</h1>
        <Tab.Group>
          <Tab.List>
            <Tab>LISTA</Tab>
            <Tab>CADASTRO</Tab>
            <Tab>EDIÇÃO</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div>
                <div className="w-full flex flex-col">
                  <div className="w-full flex flex-col md:flex-row items-center justify-around">
                    <input
                      placeholder="Pesquisar"
                      className="border-b border-[#959595] bg-[#F0F0F0]"
                    ></input>
                    <select className="border-b border-[#959595] bg-[#F0F0F0]">
                      <option disabled selected>
                        UF
                      </option>
                    </select>
                    <select className="border-b border-[#959595] bg-[#F0F0F0]">
                      <option disabled selected>
                        Empresa Vinculada
                      </option>
                    </select>
                    <select className="border-b border-[#959595] bg-[#F0F0F0]">
                      <option disabled selected>
                        Arrecadação
                      </option>
                    </select>
                    <select className="border-b border-[#959595] bg-[#F0F0F0]">
                      <option disabled selected>
                        Setor
                      </option>
                    </select>
                  </div>
                  <div>
                    <button>asdf</button>
                    <button>asdf</button>
                  </div>
                </div>
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
