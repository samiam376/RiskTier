
import { PrismaClient } from '@prisma/client'
import { ISO, SafeTech, State } from '../src/interfaces';
import {  isoMapper, readRiskCSV, safeTechMapper, stateMapper } from '../utils/readDataCSV';

//seeder script for sqlite db
const prisma = new PrismaClient();


async function main() {
    console.log(`Start seeding ...`)

    //build datasets from csvs
    const IsoDataSet = await readRiskCSV<ISO>('ISO.csv', isoMapper);
    const SafeTechDataSet = await readRiskCSV<SafeTech>('SafeTech.csv', safeTechMapper);
    const StateDataSet = await readRiskCSV<State>('State.csv', stateMapper);
    console.log(IsoDataSet);
    IsoDataSet.forEach(
        async element => {
            await prisma.iSO.create({
                data: element
            }
            );
        }
    );

    StateDataSet.forEach(
        async element => {
            await prisma.state.create({
                data: element
            })
        }
    );

    SafeTechDataSet.forEach(
        async element => {
            await prisma.safeTech.create({
                data: element
            })
        }
    )
    console.log(`Seeding finished.`)
  }
  
  main()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
    .finally(async () => {
      await prisma.$disconnect()
    })