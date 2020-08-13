import React from "react";

import { InputRow, LabelInput, Input } from "./CustomInputsStyle";

export const TextField = (props) => {
 return (
  <InputRow mb={props.mb} mt={props.mt}>
   {props.label && <LabelInput>{props.label}</LabelInput>}
   <Input {...props} />
  </InputRow>
 );
};
