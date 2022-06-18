import client from "../client";

function getUf() {
  return client("uf").header("Access-Control-Allow-Origin", "true").get();
}

export default {
  getUf,
};
