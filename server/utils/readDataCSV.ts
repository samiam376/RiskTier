import * as csv from '@fast-csv/parse';
import path from 'node:path';
import { ISO, State, SafeTech } from '../src/interfaces';


export function readRiskCSV<Type>(csvName: string, mapper: (row: any) => Type): Promise<Type[]> {
    //async read risk csv and transform rows
    return new Promise( (resolve, _) => {
        let output: Type[] = [];
        //find data directory
        //TODO: make directory lookup more robust
        const p = path.join(__dirname, '..', '..', 'data', csvName);
         csv.parseFile(p, {headers: true})
        .on('error', error => console.log(error))
        .on('data', (row: Type) => {
            output.push(mapper(row));
        })
        .on('end', () => resolve(output))
    }
    )
}

export const isoMapper = (row: any): ISO => {
    //map csv ISO model to ISO interface
    const rejected: boolean = row['ISO Class Risk Tier'] == 'REJECTED';
    return {
        code: row['ISO Code'],
        description: row['Description'],
        minYoe: Number(row['Min Years Experience Required']),
        rejected: rejected,
        tier: rejected ? -1 : Number(row['ISO Class Risk Tier'])
    } as ISO
}

export const stateMapper = (row: any): State => {
    //map csv model to State interface
    return {
        name: row['Name'],
        stateAbr: row['Abbreviation'],
        riskTier: Number(row['State Risk Tier'])
    } as State

}

export const safeTechMapper = (row: any): SafeTech => {
    //map cvs model to SafeTech interface
    const rejected: boolean = row['Tech Usage Modifier'] == 'REJECT';
    return {
        techUsageGrade: Number(row['Tech Usage Grade']),
        techUsageModifier: rejected ? -1 : Number(row['Tech Usage Modifier']),
        rejected: rejected
    } as SafeTech
}

