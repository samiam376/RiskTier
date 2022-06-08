import { Container } from "@chakra-ui/layout";
import type { NextPage } from "next";

import { RiskInput } from "../components/RiskInput";
import React from "react";

const fakeOptions = {
  isoCodes: ["ISO_11", "ISO_12", "ISO_13"],
  states: ["CA", "NY", "CO"],
  techUsageGrades: [12, 2, 3, 4],
};

const Home: NextPage = () => {
  return (
    <Container>
      <RiskInput {...fakeOptions} />
    </Container>
  );
};

export default Home;
