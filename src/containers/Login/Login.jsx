import React, { useState } from "react";
import { TextField } from "components/core/CustomInputs/CustomInputs";
import { FormattedMessage } from "react-intl";

import { Container, ContainerCard, LogoCompany, ContainerForm } from "./style";

const Login = () => {
 const [form, setForm] = useState({ emai: "", password: "" });
 return (
  <Container>
   <ContainerCard>
    <LogoCompany />
    <ContainerForm>
     <TextField
      onChange={(e) => setForm({ ...form, email: e.target.value })}
      name="email"
      label={"teste"}
      label={<FormattedMessage id="labelsInputs.logIn" />}
      type="email"
     />
    </ContainerForm>
   </ContainerCard>
  </Container>
 );
};

export default Login;
