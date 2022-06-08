import {
  Stack,
  Select,
  FormLabel,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";

export interface RiskInputProps {
  isoCodes: string[];
  states: string[];
  techUsageGrades: number[];
}

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
  const handleSubmit = (event: any) => {
    console.log(event);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <FormControl isRequired>
          <FormLabel htmlFor="state">State</FormLabel>
          <Select size="md" borderColor="black">
            {stateOptions}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="isocode">ISO code</FormLabel>
          <Select size="md" borderColor="black">
            {isoOptions}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="tus">Technical Usage Grade</FormLabel>
          <Select size="md" borderColor="black">
            {tusOptions}
          </Select>
        </FormControl>
        <Button colorScheme="red">model</Button>
      </Stack>
    </Form>
  );
};
