
export interface ISO {
    code: string
    description: string
    minYoe: number
    tier: number
    rejected: boolean
}
export interface State {
    stateAbr: string
    name: string
    riskTier: number
}

export interface SafeTech {
    techUsageGrade: number
    techUsageModifier: number
    rejected: boolean
}