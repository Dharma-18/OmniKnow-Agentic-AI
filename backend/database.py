# backend/database.py
import os
from dotenv import load_dotenv
from pinecone import Pinecone, ServerlessSpec

load_dotenv()

# Initialize Pinecone (Mocked if API key is missing)
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY", "mock-key")
PINECONE_ENV = os.getenv("PINECONE_ENVIRONMENT", "us-east-1")

def get_vector_db():
    """
    Returns a Pinecone index instance.
    """
    if PINECONE_API_KEY == "mock-key":
        print("Warning: Using Mock Vector DB. Set PINECONE_API_KEY for real integration.")
        return None
        
    pc = Pinecone(api_key=PINECONE_API_KEY)
    index_name = "omniknow-memory"
    
    # Check if index exists, else create (Simplified)
    return pc.Index(index_name)

def store_knowledge(id: str, vector: list, metadata: dict):
    """
    Stores extracted solutions in the semantic graveyard.
    """
    db = get_vector_db()
    if db:
        db.upsert(vectors=[(id, vector, metadata)])
    else:
        print(f"Mock Store: {metadata.get('summary')}")
