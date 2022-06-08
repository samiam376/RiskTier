import { Container } from "@chakra-ui/layout";
import type { NextPage } from "next";

import { RiskInput } from "../components/RiskInput";
import React, { useEffect, useState } from "react";
import { IsoData } from "./api/iso";
import { StateData } from "./api/state";
import { Tugs } from "./api/safetech";

const fakeOptions = {
  isoCodes: ["ISO_11", "ISO_12", "ISO_13"],
  states: ["CA", "NY", "CO"],
  techUsageGrades: [10, 25, 40],
};

const Home: NextPage = () => {
  const [stateInput, setStateInput] = useState({
    states: [""],
  });
  const [isoInput, setIsoInput] = useState({
    isos: [""],
  });
  const [tugInput, setTugInput] = useState({
    tugs: [0],
  });

  useEffect(() => {
    const fetchData = async () => {
      const [isoData, stateData, tugData] = await Promise.all([
        fetch("api/iso", { method: "GET" }),
        fetch("api/state", { method: "GET" }),
        fetch("api/safetech", { method: "GET" }),
      ]);

      const iso: IsoData = await isoData.json();
      const states: StateData = await stateData.json();
      const tugs: Tugs = await tugData.json();

      let isoList: string[] = [];
      iso.forEach((elem) => {
        isoList.push(elem.code);
      });

      let stateList: string[] = [];
      states.forEach((elem) => {
        stateList.push(elem.stateAbr);
      });

      let tugList: number[] = [];
      tugs.forEach((elem) => {
        tugList.push(elem.techUsageGrade);
      });

      setIsoInput({ isos: isoList });
      setStateInput({ states: stateList });
      setTugInput({ tugs: tugList });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <RiskInput
        isoCodes={isoInput.isos}
        states={stateInput.states}
        techUsageGrades={tugInput.tugs}
      />
    </Container>
  );
};

export default Home;
