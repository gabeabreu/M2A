import { Field, useFormikContext } from "formik";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Item {
  name: string;
  key: string;
}

interface Props {
  data: Item[];
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
  data,
  name,
  label,
  placeholder,
  disableErrorMessage,
  description,
  multiline,
  type,
}) => {
  const { values, errors, touched, setFieldValue, setErrors } =
    useFormikContext<any>();
  const [focus, setFocus] = useState<boolean>(false);

  const error = errors[name];
  const showError = touched[name] && !!error;

  const inputRef = useRef<any>(null);

  const onFocusHandler = () => {
    inputRef.current && inputRef.current.focus();
  };

  const textAlignVertical = multiline ? "top" : "center";

  useEffect(() => {
    if (autoFocus) onFocusHandler();
  }, []);

  return (
    <>
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative flex">
        <Field
          className={`${
            error ? "border-red-400" : "mb-8 border-gray-300"
          } block appearance-none w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          as="select"
          focus={focus}
          name={name}
          error={!disableErrorMessage ? error : undefined}
          ref={inputRef}
          onFocus={() => {
            setFocus(true);
            const newErrors = { ...errors };
            delete newErrors[name];
            setErrors(newErrors);
          }}
          type={type}
          onBlur={() => setFocus(false)}
          placeholderTextColor={"#bdbdbd"}
          value={values[name]}
          placeholder={placeholder}
          multiline={multiline}
          textAlignVertical={textAlignVertical}
        >
          {data.map((item) => (
            <option key={item.key} value={item.key}>
              {item.name}
            </option>
          ))}
        </Field>
        <FaChevronDown color={"#989898"} className="absolute right-3 top-3" />
      </div>
      {error || description ? (
        <div className="text-red-400 text-xs mb-4">{`${
          error || description
        }`}</div>
      ) : null}
    </>
  );
};

export default InputFormik;
