import * as Yup from "yup";

import * as helpers from "../../../../helpers";
import { translate } from "../../../../locales";
import * as api from "../../../../services/api";
import { AccountRegister } from "../../../../store/account/types";

const initialValues: AccountRegister = {
  name: "",
  surname: "",
  email: "",
  username: "",
  password: "",
  gender: "",
  birthday: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(translate("YUP_GENERAL_REQUIRED")),
  surname: Yup.string().required(translate("YUP_GENERAL_REQUIRED")),
  email: Yup.string()
    .email(translate("YUP_EMAIL"))
    .required(translate("YUP_GENERAL_REQUIRED")),
  password: Yup.string()
    .min(6, translate("YUP_PASSWORD_REQUIRED"))
    .required(translate("YUP_PASSWORD_REQUIRED")),
  gender: Yup.string().required(translate("YUP_RADIO_REQUIRED")),
  birthday: Yup.string()
    .required(translate("YUP_GENERAL_REQUIRED"))
    .matches(/\d{2}\/\d{2}\/\d{4}/, translate("YUP_WRONG_FORMAT")),
});

async function validate({ birthday, email }: AccountRegister) {
  const _birthday = birthday.split("/").reverse().join("-");
  const now = new Date();
  const hundredYears = helpers.date_time.subYearsFromNow(100);

  if (!helpers.date_time.isDateValid(_birthday)) {
    return { birthday: translate("YUP_DATE_ERROR") };
  }

  if (helpers.date_time.isDateAfter(_birthday, now)) {
    return { birthday: translate("YUP_DATE_ERROR") };
  }
  if (helpers.date_time.isDateBefore(_birthday, hundredYears)) {
    return { birthday: translate("YUP_DATE_ERROR") };
  }

  try {
    const { data: emailValidation } = await api.auth.validateEmail(email);
    if (emailValidation.isAvailable === false) {
      return { email: translate("YUP_EMAIL_TAKEN") };
    }
  } catch (err) {
    console.log(err);
  }
}

export default {
  validate,
  initialValues,
  validationSchema,
  validateOnBlur: false,
  validateOnChange: false,
};
