import * as Yup from "yup";

const initialValues: any = {
  ds_negocio: '',
  missao: '',
  visao: '',
  valores: '',
};

const validationSchema = Yup.object().shape({
  ds_negocio: Yup.string(),
  missao: Yup.string(),
  visao: Yup.string(),
  valores: Yup.string(),
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