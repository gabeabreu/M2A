import client from "../client";

function getCompany(companyId: string) {
  return client("empresa/").id(companyId).get();
}

function getCompanies() {
  return client("empresa/").get();
}

function registerCompany(data: any) {
  return client("empresa/").data(data).post();
}

export default {
  getCompanies,
  getCompany,
  registerCompany,
};
