# backend/agents/detector.py
from typing import Dict, Any

def detector_agent(state: Dict[str, Any]) -> Dict[str, Any]:
    """
    Detector Agent: Analyzes knowledge risk and siloing.
    """
    is_critical = state.get("is_critical", False)
    
    # Mock logic for risk assessment
    # A high risk level (0-100) indicates this knowledge is siloed.
    risk_level = 85 if is_critical else 20
    
    print(f"Detector Agent: Risk assessment complete. Level: {risk_level}")
    
    return {
        "employee_risk_level": risk_level
    }
