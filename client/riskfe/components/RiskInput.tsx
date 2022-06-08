import {
  Stack,
  Select,
  FormLabel,
  Button,
  FormControl,
  Input,
  Alert,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/layout";
import { InputHTMLAttributes, useState } from "react";
import { RiskTable } from "../components/RiskTable";

type RiskInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isoCodes: string[];
  states: string[];
  techUsageGrades: number[];
};

export const RiskInput: React.FC<RiskInputProps> = ({
  isoCodes,
  states,
  techUsageGrades,
}) => {
  let stateOptions: any[] = [];
  states.forEach((state) => {
    stateOptions.push(<option>{state}</option>);
  });

  let isoOptions: any[] = [];
  isoCodes.forEach((iso) => {
    isoOptions.push(<option>{iso}</option>);
  });

  let tusOptions: any[] = [];
  techUsageGrades.forEach((tus) => {
    tusOptions.push(<option>{tus}</option>);
  });

  const [state, setState] = useState(states[0]);
  const [iso, setIso] = useState(isoCodes[0]);
  const [tug, setTug] = useState(String(techUsageGrades[0]));
  const [yoe, setYoe] = useState("");

  const [risk, setRisk] = useState({
    rejection: "",
    riskTier: "",
    iSORiskTier: "",
    stateRiskTier: "",
    techUsageModifier: "",
    referred: "",
  });

  const [displayAlert, setDisplayAlert] = useState("none");
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setDisplayAlert("none");
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "auth=shepherd");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
    };

    const url = `/api/risk?iso=${iso}&state=${state}&tug=${tug}&yoe=${yoe}`;

    try {
      const response = await fetch(url, requestOptions);
      const resp = await response.json();
      if (resp.error === "INVALID_YOE") {
        setDisplayAlert("");
        setRisk({
          rejection: "",
          riskTier: "",
          iSORiskTier: "",
          stateRiskTier: "",
          techUsageModifier: "",
          referred: "",
        });
      } else {
        const model = resp.model;
        setRisk({
          rejection: model.Rejection ? "TRUE" : "FALSE",
          riskTier: model.RiskTier,
          iSORiskTier: model.ISORiskTier,
          stateRiskTier: model.StateRiskTier,
          techUsageModifier: model.TechUsageModifier,
          referred: model.Referred ? "TRUE" : "FALSE",
        });
      }
    } catch (err) {
      console.log(err);
      setRisk({
        rejection: "",
        riskTier: "",
        iSORiskTier: "",
        stateRiskTier: "",
        techUsageModifier: "",
        referred: "",
      });
    }
  };

  return (
    <>
      <Flex alignItems="center">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <FormControl isRequired>
              <FormLabel htmlFor="state">State</FormLabel>
              <Select
                size="sm"
                borderColor="black"
                onChange={(e) => setState(e.target.value)}
              >
                {stateOptions}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="isocode">ISO code</FormLabel>
              <Select
                size="sm"
                borderColor="black"
                onChange={(e) => setIso(e.target.value)}
              >
                {isoOptions}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="tus">Technical Usage Grade</FormLabel>
              <Select
                size="sm"
                borderColor="black"
                onChange={(e) => setTug(e.target.value)}
              >
                {tusOptions}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="yoe">Years of Experience</FormLabel>
              <Input
                id="yoe"
                size="sm"
                borderColor="black"
                onChange={(e) => setYoe(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="red" type="submit">
              model
            </Button>
          </Stack>
        </form>
        <Spacer>
          <RiskTable
            rejection={risk.rejection}
            riskTier={risk.riskTier}
            iSORiskTier={risk.iSORiskTier}
            stateRiskTier={risk.stateRiskTier}
            techUsageModifier={risk.techUsageModifier}
            referred={risk.referred}
          />
        </Spacer>
      </Flex>
      <Alert status="error" display={displayAlert}>
        Invalid Years of Experience
      </Alert>
    </>
  );
};
