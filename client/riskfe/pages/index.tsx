import { Center, Container, Flex, Spacer, Square } from '@chakra-ui/layout'
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
  Stack,
  Select,
  Box,
  FormLabel,
  Divider,
  Button,
} from '@chakra-ui/react'
import { RiskTable, RiskTableProps } from '../components/riskTable'
import React from 'react'

const fakeData: RiskTableProps = {
  rejection: 'TRUE',
  riskTier: 10,
  iSORiskTier: 7,
  stateRiskTier: 5,
  techUsageModifier: 0.75,
  referred: 'TRUE'
}

const Home: NextPage = () => {
  return (
    <Container>
      <Flex alignItems='center'>
      <Stack spacing={2}>
        <FormLabel htmlFor='state'>State</FormLabel>
        <Select size='md' borderColor='black' />
        <FormLabel htmlFor='isocode'>ISO code</FormLabel>
        <Select size='md' borderColor='black'/>
        <FormLabel htmlFor='tus'>Technical Usage Grade</FormLabel>
        <Select size='md' borderColor='black'/>
        <Button colorScheme='red'>Calculate</Button>
    </Stack> 
    <Spacer/>
    <Divider orientation='vertical'/>
      <RiskTable {...fakeData}></RiskTable>
      <Divider orientation='vertical'/> 
    </Flex>
    </Container>
  )
}

export default Home
