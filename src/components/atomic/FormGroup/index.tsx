import React from "react";

import { Container, InputTextHelper } from "./styles";
import { FormGroupProps } from "./types";

export function FormGroup({ error, isSibling, children }: FormGroupProps) {
  return (
    <Container isSibling={isSibling}>
      {children}

      {error?.message && <InputTextHelper>{error.message}</InputTextHelper>}
    </Container>
  );
}
