import { useState, FormEvent } from "react";

interface InputProps {
  name: string;
  id: string;
  updateValue: (val: string) => void;
}
export default function (props: InputProps) {
  const [inpValue, setInpValue] = useState();
  function onInput(e: any) {
    props.updateValue(e.target.value);
  }
  return <input type="text" name={props.name} id={props.id} value={inpValue} onInput={onInput} />;
}
