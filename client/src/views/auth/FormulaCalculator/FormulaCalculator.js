import NumberInput from "../../../components/shared/forms/NumberInput/NumberInput";
import TextInput from "../../../components/shared/forms/TextInput/TextInput";

export default function FormulaCalculator() {
  return (
    <>
      <h1>Formula Calculator Page</h1>
      <TextInput id='herb-1' name='Herb 1' placeholder="Herb Name" labelTxt='Herb 1 Name' />
      <NumberInput id='herb-1-percent' name='Herb 1 Percent' labelTxt='Herb 1 Percent of Total' placeholder='Herb 1 Percent of Total Volume' />
    </>
  );
}