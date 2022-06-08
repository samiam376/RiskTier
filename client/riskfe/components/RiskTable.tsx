import {
  Table,
  Tr,
  Tbody,
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
            <Td fontWeight="extrabold" key="rt">
              Risk Tier
            </Td>
            <Td isNumeric key="rtvalue">
              {riskTier}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold" key="iso">
              ISO Risk Tier
            </Td>
            <Td isNumeric key="isovalue">
              {iSORiskTier}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold" key="state">
              State Risk Tier
            </Td>
            <Td isNumeric key="statevalue">
              {stateRiskTier}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold" key="tsu">
              Tech Usage Modifier
            </Td>
            <Td isNumeric key="tsuvalue">
              {techUsageModifier}
            </Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold" key="refjected">
              Rejected
            </Td>
            <Td key="rejectvalue">{rejection}</Td>
          </Tr>
          <Tr>
            <Td fontWeight="extrabold" key="referred">
              Referred
            </Td>
            <Td key="refervalue">{referred}</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
