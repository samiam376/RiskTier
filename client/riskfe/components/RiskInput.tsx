import {
  Stack,
  Select,
  FormLabel,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/layout";
import { InputHTMLAttributes, useState } from "react";

type RiskInputProps = InputHTMLAttributes<HTMLInputElement> & {
  isoCodes: string[];
  states: string[];
  techUsageGrades: number[];
};

export const RiskInput: React.FC<RiskInputProps> = ({
  isoCodes,
  states,
  techUsageGrades,
  ...props
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

  const [state, setState] = useState("");
  const [iso, setIso] = useState("");
  const [tug, setTug] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(iso);
    console.log(state);
    console.log(tug);
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
      <Spacer>{props.children}</Spacer>
    </Flex>
  );
};
