import client from "../client";

function getUf() {
  return client("uf/").get();
}

function getAddress(addressId: string) {
  return client("endereco/").id(addressId).get();
}

export default {
  getUf,
  getAddress,
};
