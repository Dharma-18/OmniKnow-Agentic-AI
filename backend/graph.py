# backend/graph.py
from langgraph.graph import StateGraph, END

# Define the state of our knowledge mining process
class AgentState(TypedDict):
    raw_data: str
    is_critical: bool
    summary: str
    employee_risk_level: int

# 1. Miner Agent: Extracts knowledge from Slack/Jira
def miner_agent(state):
    # Logic to identify 'How' a problem was solved
    return {"summary": "Extracted fix for Redis 504 error", "is_critical": True}

# 2. Detector Agent: Analyzes if this knowledge is 'at risk'
def detector_agent(state):
    # Logic to check if the employee is the only one who knows this
    return {"employee_risk_level": 90}

# Define the Workflow
workflow = StateGraph(AgentState)
workflow.add_node("miner", miner_agent)
workflow.add_node("detector", detector_agent)

workflow.set_entry_point("miner")
workflow.add_edge("miner", "detector")
workflow.add_edge("detector", END)

app = workflow.compile()