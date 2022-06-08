import { Square } from '@chakra-ui/layout'
import type { NextPage } from 'next'
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
} from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Square>
      <TableContainer>
  <Table variant='simple'>
    <TableCaption placement='top'>Risk Output</TableCaption>
    <Tbody>
      <Tr>
        <Td fontWeight='extrabold'>Risk Tier</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td fontWeight='extrabold'>ISO Risk Tier</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td fontWeight='extrabold'>State Risk Tier</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td fontWeight='extrabold'>Tech Usage Modifier</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
      <Tr>
        <Td fontWeight='extrabold'>Rejected</Td>
        <Td >TRUE</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Square>
  )
}

export default Home
