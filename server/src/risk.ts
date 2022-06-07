import { Hueristic, ISO, ModelOutput, SafeTech, State } from "./interfaces"

//Hueristic functions currently defined in code, but could easily be made extensible by api 
//to allow the underwristing to create/edit/update hueristics from the front end 
export const NyCrane: Hueristic = (iso: ISO, state: State, _safeTech: SafeTech): boolean => {
    return state.stateAbr === 'NY' && iso.description === 'Crane Work';
}

export const CoRailroad: Hueristic = (iso: ISO, state: State, _safeTech: SafeTech): boolean => {
    return state.stateAbr === 'CO' && iso.description === 'Railroad';
} 

export const riskTier = (iso: ISO, state: State, safeTech: SafeTech, hueristics: Hueristic[]): ModelOutput => {
    //builds final risk tier, applys hueristics, and returns model output

    //check for potential rejections and end calculation early if found 
    const rejected: boolean = iso.rejected || safeTech.rejected
    if (rejected){
        return {
            Rejection: true,
            RiskTier: null,
            ISORiskTier: iso.rejected ? null : iso.tier,
            StateRiskTier: state.riskTier,
            TechUsageModifier: safeTech.rejected ? null : safeTech.techUsageModifier,
            Referred: null
        };
    }

    //calculate final risk 
    const finalRisk: number  = ((iso.tier + state.riskTier) / 2) * safeTech.techUsageModifier;

    //apply hueristics to model to check for referred
    let ref: boolean = false; 
    
    hueristics.forEach(
        fn => {
            ref = ref || fn(iso, state, safeTech)
        }
    )

    return {
        Rejection: false,
        RiskTier: finalRisk,
        ISORiskTier: iso.tier,
        StateRiskTier: state.riskTier,
        TechUsageModifier: safeTech.techUsageModifier,
        Referred: ref
    }
}