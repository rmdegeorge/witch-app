import { useState } from "react";
import { isNumber } from "../../../../utilities/utilities";

export default function NumberInput(props) {
  const {
    inputId,
    labelTxt,
    name,
    placeholder
  } = props;

  const [value, setValue] = useState('');
  function onChangeHandler(e) {
    let valStr = e.target.value;
    if (isNumber(valStr)) {
      setValue(valStr);
    }
    return;
  }

  return (
    <div>
      <label htmlFor={inputId} >{labelTxt}</label>
      <input type='text' id={inputId} name={name} placeholder={placeholder} value={value} onChange={onChangeHandler} />
    </div>
  );
}