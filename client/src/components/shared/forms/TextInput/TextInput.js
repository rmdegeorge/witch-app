import { useState } from "react";

export default function TextInput(props) {
  const {
    className,
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
    <div className='form-group'>
      <label htmlFor={inputId} className='control-label'>{labelTxt}</label>
      <input type='text' id={inputId} className={`form-control ${className}`} name={name} placeholder={placeholder} value={value} onChange={onChangeHandler} />
    </div>
  );
}