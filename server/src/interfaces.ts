export interface ISO {
  code: string;
  description: string;
  minYoe: number;
  tier: number;
  rejected: boolean;
}
export interface State {
  stateAbr: string;
  name: string;
  riskTier: number;
}

export interface SafeTech {
  techUsageGrade: number;
  techUsageModifier: number;
  rejected: boolean;
}

export interface Hueristic {
  (iso: ISO, state: State, safeTech: SafeTech): boolean;
}

export interface ModelInput {
  IsoClassCode: string;
  Yoe: number;
  State: string;
  TUS: number;
}

export interface ModelOutput {
  Rejection: boolean;
  RiskTier: number | null;
  ISORiskTier: number | null;
  StateRiskTier: number | null;
  TechUsageModifier: number | null;
  Referred: boolean | null;
}
