import { useState } from "react";
import { isNumber } from "../../../../utilities/utilities";

export default function NumberInput(props) {
  const {
    className,
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
    <div className='form-group'>
      <label htmlFor={inputId} className='control-label'>{labelTxt}</label>
      <input type='text' id={inputId} className={`form-control ${className}`} name={name} placeholder={placeholder} value={value} onChange={onChangeHandler} />
    </div>
  );
}