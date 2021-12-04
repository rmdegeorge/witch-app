import { useState } from "react";

export default function TextInput(props) {
  const {
    inputId,
    labelTxt,
    name,
    placeholder
  } = props;
  
  const [value, setValue] = useState('');
  
  function onChangeHandler(e) {
    setValue(e.target.value);
    return;
  }

  return (
    <div>
      <label htmlFor={inputId} >{labelTxt}</label>
      <input type='text' id={inputId} name={name} placeholder={placeholder} value={value} onChange={onChangeHandler} />
    </div>
  );
}