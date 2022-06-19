import * as Yup from "yup";
import { formErrors } from "../../../helpers";
import { RegisterProfile } from "../../../redux/account/types";

const initialValues: RegisterProfile = {
  nome: "Vitor",
  sobrenome: "Almeida",
  email: "vito@email.com",
  cpf: "06008344110",
  username: "",
  telefone: "61999944896",
  password: "123456",
  confirmPassword: "123456",
  formacao: "analfabeto",
  perfil: "usuario",
  uf: "AC",
  ativo: true,
  empresa: 1,
};

const validationSchema = Yup.object().shape({
  nome: Yup.string().required(formErrors.errorMessages.required),
  sobrenome: Yup.string().required(formErrors.errorMessages.required),
  email: Yup.string()
    .email(formErrors.errorMessages.invalidEmail)
    .required(formErrors.errorMessages.required),
  password: Yup.string()
    .min(6, formErrors.errorMessages.shortPassword)
    .required(formErrors.errorMessages.required),
  confirmPassword: Yup.string()
    .required(formErrors.errorMessages.required)
    .oneOf(
      [Yup.ref("password"), null],
      formErrors.errorMessages.differentPassword
    ),
  formacao: Yup.string().required(formErrors.errorMessages.required),
  uf: Yup.string().required(formErrors.errorMessages.required),
  telefone: Yup.string().required(formErrors.errorMessages.required),
  cpf: Yup.string().required(formErrors.errorMessages.required),
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
