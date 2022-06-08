import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export interface RiskTableProps {
  rejection: string;
  riskTier: number | null;
  iSORiskTier: number | null;
  stateRiskTier: number | null;
  techUsageModifier: number | null;
  referred: string | null;
}

export const RiskTable: React.FC<RiskTableProps> = ({
  rejection,
  riskTier,
  iSORiskTier,
  stateRiskTier,
  techUsageModifier,
  referred,
}) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">Risk Output</TableCaption>
        <Tbody>
          <Tr>
            <Td fontWeight="extrabold">Risk Tier</Td>
            <Td isNumeric>{riskTier}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold">ISO Risk Tier</Td>
            <Td isNumeric>{iSORiskTier}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold">State Risk Tier</Td>
            <Td isNumeric>{stateRiskTier}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold">Tech Usage Modifier</Td>
            <Td isNumeric>{techUsageModifier}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold">Rejected</Td>
            <Td>{rejection}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold">Referred</Td>
            <Td>{referred}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
