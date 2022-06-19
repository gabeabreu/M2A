import * as Yup from "yup";

const initialValues: any = {
  cnpj: '',
  razao_social: '',
  fantasia: '',
  num_empregados: '',
  dt_ano_inicio: '',
  telefone: '',
  bool_master: '',
  inscricao_estadual: '',
  fax: '',
  celular: '',
  grupo: '',
  segmento: '',
  setor: '',
  tipo_industria: '',
  faturamento: '',
  projeto: '',
  endereco: '',
  valor_arrecadacao: '',
};

const validationSchema = Yup.object().shape({
  cnpj: Yup.string(),
  razao_social: Yup.string(),
  fantasia: Yup.string(),
  num_empregados: Yup.string(),
  dt_ano_inicio: Yup.string(),
  telefone: Yup.string(),
  bool_master: Yup.string(),
  inscricao_estadual: Yup.string(),
  fax: Yup.string(),
  celular: Yup.string(),
  grupo: Yup.string(),
  segmento: Yup.string(),
  setor: Yup.string(),
  tipo_industria: Yup.string(),
  faturamento: Yup.string(),
  projeto: Yup.string(),
  endereco: Yup.string(),
  valor_arrecadacao: Yup.string(),
});

// async function validate({ birthday, email }: AccountRegister) {
//   const _birthday = birthday.split("/").reverse().join("-");
//   const now = new Date();
//   const hundredYears = helpers.date_time.subYearsFromNow(100);

//   if (!helpers.date_time.isDateValid(_birthday)) {
//     return { birthday: translate("YUP_DATE_ERROR") };
//   }

//   if (helpers.date_time.isDateAfter(_birthday, now)) {
//     return { birthday: translate("YUP_DATE_ERROR") };
//   }
//   if (helpers.date_time.isDateBefore(_birthday, hundredYears)) {
//     return { birthday: translate("YUP_DATE_ERROR") };
//   }

//   try {
//     const { data: emailValidation } = await api.auth.validateEmail(email);
//     if (emailValidation.isAvailable === false) {
//       return { email: translate("YUP_EMAIL_TAKEN") };
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

export default {
  // validate,
  initialValues,
  validationSchema,
  validateOnBlur: false,
  validateOnChange: false,
};
