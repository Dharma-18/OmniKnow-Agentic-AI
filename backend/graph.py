# backend/graph.py
from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, END
from .agents.miner import miner_agent
from .agents.detector import detector_agent

# Define the state of our knowledge mining process
class AgentState(TypedDict):
    raw_data: str
    is_critical: bool
    summary: str
    employee_risk_level: int

# Define the Workflow
workflow = StateGraph(AgentState)

workflow.add_node("miner", miner_agent)
workflow.add_node("detector", detector_agent)

workflow.set_entry_point("miner")
workflow.add_edge("miner", "detector")
workflow.add_edge("detector", END)

app = workflow.compile()
