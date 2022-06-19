import client from "../client";

function getUf() {
  return client("uf/").get();
}

export default {
  getUf,
};
