type InputPropTypes = {
  type?: "text" | "email" | "password" | "number" | "radio" | "checkbox";
  name?: string;
  id?: string;
  placeholder?: string;
  options?: any[];
};

export default InputPropTypes;
