# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .graph import app as graph_app

app = FastAPI(title="OmniKnow API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "OmniKnow API is running"}

@app.post("/analyze")
async def analyze_knowledge(data: dict):
    # This will trigger the LangGraph workflow
    state = {
        "raw_data": data.get("text", ""),
        "is_critical": False,
        "summary": "",
        "employee_risk_level": 0
    }
    result = await graph_app.ainvoke(state)
    return result