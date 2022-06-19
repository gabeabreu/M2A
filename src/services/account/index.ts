import client from "../client";

function generateToken(data: any) {
  return client("token/").data(data).post();
}

function registerUser(data: any) {
  return client("usuario/").data(data).post();
}

function getSelfAccount(data: any) {
  return client("usuario/").data(data).post();
}

export default {
  generateToken,
  registerUser,
};
