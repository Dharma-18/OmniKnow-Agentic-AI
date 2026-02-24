# backend/agents/miner.py
import os
from typing import Dict, Any

def miner_agent(state: Dict[str, Any]) -> Dict[str, Any]:
    """
    Miner Agent: Extracts structured knowledge from raw data (Slack/Jira).
    """
    raw_data = state.get("raw_data", "")
    
    # Mock logic for knowledge extraction
    # In a real scenario, this would use an LLM chain
    summary = f"Extracted knowledge: {raw_data[:50]}..." if raw_data else "No data to mine."
    is_critical = "error" in raw_data.lower() or "fix" in raw_data.lower()
    
    print(f"Miner Agent: Mined data. Critical: {is_critical}")
    
    return {
        "summary": summary,
        "is_critical": is_critical
    }
