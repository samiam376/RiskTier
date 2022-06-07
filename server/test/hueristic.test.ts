import { CoRailroad, NyCrane } from "../src/risk";

describe("Hueristics", () => {
  it("Check NY Not Referred", () => {
    const iso = {
      code: "A",
      description: "Driver",
      rejected: false,
      minYoe: 10,
      tier: 4,
    };

    const state = {
      stateAbr: "CA",
      name: "California",
      riskTier: 5,
    };

    const safeTech = {
      techUsageGrade: 0,
      techUsageModifier: 0,
      rejected: false,
    };

    const outputExpected = false;
    const outputAcutal = NyCrane(iso, state, safeTech);
    expect(outputExpected).toEqual(outputAcutal);
  }),
    it("Check NY Referred", () => {
      const iso = {
        code: "A",
        description: "Crane Work",
        rejected: false,
        minYoe: 10,
        tier: 4,
      };

      const state = {
        stateAbr: "NY",
        name: "New York",
        riskTier: 5,
      };

      const safeTech = {
        techUsageGrade: 0,
        techUsageModifier: 0,
        rejected: false,
      };

      const outputExpected = true;
      const outputAcutal = NyCrane(iso, state, safeTech);
      expect(outputExpected).toEqual(outputAcutal);
    }),
    it("Check CO Not Referred", () => {
      const iso = {
        code: "A",
        description: "Driver",
        rejected: false,
        minYoe: 10,
        tier: 4,
      };

      const state = {
        stateAbr: "CA",
        name: "California",
        riskTier: 5,
      };

      const safeTech = {
        techUsageGrade: 0,
        techUsageModifier: 0,
        rejected: false,
      };

      const outputExpected = false;
      const outputAcutal = CoRailroad(iso, state, safeTech);
      expect(outputExpected).toEqual(outputAcutal);
    }),
    it("Check CO Referred", () => {
      const iso = {
        code: "A",
        description: "Railroad",
        rejected: false,
        minYoe: 10,
        tier: 4,
      };

      const state = {
        stateAbr: "CO",
        name: "Colorado",
        riskTier: 5,
      };

      const safeTech = {
        techUsageGrade: 0,
        techUsageModifier: 0,
        rejected: false,
      };

      const outputExpected = true;
      const outputAcutal = CoRailroad(iso, state, safeTech);
      expect(outputExpected).toEqual(outputAcutal);
    });
});
