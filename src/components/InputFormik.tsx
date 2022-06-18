import { Field, useFormikContext } from "formik";
import React, { useState, useRef, useEffect } from "react";

interface Props {
  autoFocus?: any;
  type?: string;
  name: string;
  label?: string;
  width?: number;
  placeholder?: string;
  disableErrorMessage?: boolean;
  multiline?: boolean;
  secureTextEntry?: boolean;
  description?: string;
  mask?: string;
  descriptionMarginBottom?: number;
}

const InputFormik: React.FC<Props> = ({
  autoFocus,
  name,
  label,
  placeholder,
  disableErrorMessage,
  secureTextEntry,
  description,
  multiline,
  descriptionMarginBottom,
  type,
}) => {
  const { values, errors, touched, setFieldValue, setErrors } =
    useFormikContext<any>();
  const [focus, setFocus] = useState<boolean>(false);
  const [pressed, setPress] = useState<boolean>(false);

  const error = errors[name];
  const showError = touched[name] && !!error;

  const showContent = secureTextEntry && pressed;

  const inputRef = useRef<any>(null);

  const onFocusHandler = () => {
    inputRef.current && inputRef.current.focus();
  };

  const textAlignVertical = multiline ? "top" : "center";

  useEffect(() => {
    if (autoFocus) onFocusHandler();
  }, []);
  console.log(error);
  return (
    <>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="">
        <Field
          className={`${
            error ? "border-red-400" : "mb-8 border-gray-300"
          } appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          focus={focus}
          name={name}
          error={!disableErrorMessage ? error : undefined}
          ref={inputRef}
          onFocus={() => {
            setFocus(true);
            setErrors({});
          }}
          type={type}
          onBlur={() => setFocus(false)}
          placeholderTextColor={"#bdbdbd"}
          value={values[name]}
          placeholder={placeholder}
          onChangeText={(text) => setFieldValue(name, text)}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
        />
      </div>
      {error || description ? (
        <div className="text-red-400 text-xs mb-4">{`${
          error || description || ""
        }`}</div>
      ) : null}
    </>
  );
};

export default InputFormik;
