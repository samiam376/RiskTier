import { Container, Flex, Spacer, Square } from "@chakra-ui/layout";
import type { NextPage } from "next";

import { RiskInput } from "../components/RiskInput";
import React from "react";
import { RiskTable, RiskTableProps } from "../components/RiskTable";

const fakeData: RiskTableProps = {
  rejection: "TRUE",
  riskTier: 10,
  iSORiskTier: 7,
  stateRiskTier: 5,
  techUsageModifier: 0.75,
  referred: "TRUE",
};

const fakeOptions = {
  isoCodes: ["ISO_11", "ISO_12", "ISO_13"],
  states: ["CA", "NY", "CO"],
  techUsageGrades: [1, 2, 3, 4],
};

const Home: NextPage = () => {
  return (
    <Container>
      <Flex alignItems="center">
        <RiskInput {...fakeOptions}></RiskInput>
        <Spacer />
        <RiskTable {...fakeData}></RiskTable>
      </Flex>
    </Container>
  );
};

export default Home;
