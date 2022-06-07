import { hueristics, riskTier } from "../src/risk";

describe("Test Risk Modeling", () => {
    it("test iso rejection", () => {
        const iso = {
            code: "A",
            description: "Driver",
            rejected: true,
            minYoe: 10,
            tier: -1
        };

        const state = {
            stateAbr: "CA",
            name: "California",
            riskTier: 5
        };

        const safeTech = {
            techUsageGrade: 1,
            techUsageModifier: 2,
            rejected: false
        };

        const expected = {
            Rejection: true,
            RiskTier: null,
            ISORiskTier: null,
            StateRiskTier: 5,
            TechUsageModifier: 2, 
            Referred: null
        } 

        const output = riskTier(iso, state, safeTech, hueristics)
        expect(output).toEqual(expected)
    }),
    it("test safe tech rejection", () => {
        const iso = {
            code: "A",
            description: "Driver",
            rejected: false,
            minYoe: 10,
            tier:  5
        };

        const state = {
            stateAbr: "CA",
            name: "California",
            riskTier: 5
        };

        const safeTech = {
            techUsageGrade: 0,
            techUsageModifier: -1,
            rejected: true
        };

        const expected = {
            Rejection: true,
            RiskTier: null,
            ISORiskTier: 5,
            StateRiskTier: 5,
            TechUsageModifier: null, 
            Referred: null
        } 

        const output = riskTier(iso, state, safeTech, hueristics)
        expect(output).toEqual(expected)
    }),
    it("test iso rejection", () => {
        const iso = {
            code: "A",
            description: "Driver",
            rejected: true,
            minYoe: 10,
            tier: -1
        };

        const state = {
            stateAbr: "CA",
            name: "California",
            riskTier: 5
        };

        const safeTech = {
            techUsageGrade: 1,
            techUsageModifier: 2,
            rejected: false
        };

        const expected = {
            Rejection: true,
            RiskTier: null,
            ISORiskTier: null,
            StateRiskTier: 5,
            TechUsageModifier: 2, 
            Referred: null
        } 

        const output = riskTier(iso, state, safeTech, hueristics)
        expect(output).toEqual(expected)
    }),
    it("test no referal, no rejection", () => {
        const iso = {
            code: "A",
            description: "Driver",
            rejected: false,
            minYoe: 10,
            tier: 3
        };

        const state = {
            stateAbr: "CA",
            name: "California",
            riskTier: 5
        };

        const safeTech = {
            techUsageGrade: 85,
            techUsageModifier: .75,
            rejected: false
        };

        const expected = {
            Rejection: false,
            RiskTier: 3,
            ISORiskTier: 3,
            StateRiskTier: 5,
            TechUsageModifier: .75, 
            Referred: false
        } 

        const output = riskTier(iso, state, safeTech, hueristics)
        expect(output).toEqual(expected)
    }),
    it("test referal, no rejection", () => {
        const iso = {
            code: "A",
            description: "Crane Work",
            rejected: false,
            minYoe: 10,
            tier: 3
        };

        const state = {
            stateAbr: "NY",
            name: "New York",
            riskTier: 5
        };

        const safeTech = {
            techUsageGrade: 85,
            techUsageModifier: .75,
            rejected: false
        };

        const expected = {
            Rejection: false,
            RiskTier: 3,
            ISORiskTier: 3,
            StateRiskTier: 5,
            TechUsageModifier: .75, 
            Referred: true
        } 

        const output = riskTier(iso, state, safeTech, hueristics)
        expect(output).toEqual(expected)
    })
})
