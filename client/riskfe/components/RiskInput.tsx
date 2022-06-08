import {
  Stack,
  Select,
  FormLabel,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/layout";
import { InputHTMLAttributes, useState } from "react";
import { RiskTable, RiskTableProps } from "../components/RiskTable";

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

  const [state, setState] = useState(stateOptions[0]);
  const [iso, setIso] = useState(isoOptions[0]);
  const [tug, setTug] = useState(tusOptions[0]);
  const [risk, setRisk] =useState({
    rejection: "",
    riskTier: null,
    iSORiskTier: null,
    stateRiskTier: null,
    techUsageModifier: null,
    referred: "",
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(iso);
    console.log(state);
    console.log(tug);

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "auth=shepherd");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders
    };

    const url =  `localhost:3001/risk?iso=${iso}}&state=${state}&tug=${tug}`
    const response = await fetch(
        url,
        requestOptions
    ).then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };

  return (
    <Flex alignItems="center">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <FormControl isRequired>
            <FormLabel htmlFor="state">State</FormLabel>
            <Select
              size="md"
              borderColor="black"
              onChange={(e) => setState(e.target.value)}
            >
              {stateOptions}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="isocode">ISO code</FormLabel>
            <Select
              size="md"
              borderColor="black"
              onChange={(e) => setIso(e.target.value)}
            >
              {isoOptions}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="tus">Technical Usage Grade</FormLabel>
            <Select
              size="md"
              borderColor="black"
              onChange={(e) => setTug(e.target.value)}
            >
              {tusOptions}
            </Select>
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
  );
};
