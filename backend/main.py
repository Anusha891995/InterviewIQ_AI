from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

from database import engine, SessionLocal
from models import Base, User
from schemas import UserCreate

Base.metadata.create_all(bind=engine)

app = FastAPI()

# Allow requests from React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "InterviewIQ AI Backend Running"}

@app.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):

    filename = file.filename

    ats_score = 82

    suggestions = [
        "Add more technical skills",
        "Include GitHub profile",
        "Mention internship experience",
        "Improve resume summary"
    ]

    return {
        "filename": filename,
        "message": "Resume uploaded successfully",
        "ats_score": ats_score,
        "suggestions": suggestions
    }
@app.post("/signup")
def signup(user: UserCreate):

    db = SessionLocal()

    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        db.close()
        return {"message": "Email already registered"}

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    db.close()

    return {
        "message": "Signup Successful",
        "user": {
            "id": new_user.id,
            "name": new_user.name,
            "email": new_user.email
        }
    }
@app.post("/login")
def login(user: UserCreate):

    db = SessionLocal()

    existing_user = db.query(User).filter(
        User.email == user.email,
        User.password == user.password
    ).first()

    db.close()

    if existing_user:
        return {
            "message": "Login Successful",
            "user": {
                "id": existing_user.id,
                "name": existing_user.name,
                "email": existing_user.email
            }
        }

    return {
        "message": "Invalid Email or Password"
    }
from pydantic import BaseModel

class Answer(BaseModel):
    answer: str


from random import choice

questions = [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Where do you see yourself in 5 years?",
    "Why do you want to work at our company?",
    "Explain your final year project.",
    "Tell me about a challenging situation you faced.",
    "What programming languages do you know?",
    "Why did you choose Computer Science?"
]

@app.get("/interview-question")
def interview_question():
    return {
        "question": choice(questions)
    }

@app.post("/evaluate-answer")
def evaluate_answer(data: Answer):

    if len(data.answer) < 30:
        return {
            "score": 4,
            "feedback": "Your answer is too short. Please explain more."
        }

    return {
        "score": 9,
        "feedback": "Good answer! You explained yourself clearly."
    }
from pydantic import BaseModel
from random import choice

coding_questions = [
    {
        "title": "Reverse a String",
        "description": "Write a program to reverse a string."
    },
    {
        "title": "Palindrome Number",
        "description": "Check whether a number is palindrome."
    },
    {
        "title": "Factorial",
        "description": "Find factorial of a number."
    },
    {
        "title": "Fibonacci",
        "description": "Print Fibonacci series."
    },
    {
        "title": "Prime Number",
        "description": "Check whether a number is prime."
    }
]

@app.get("/coding-question")
def coding_question():
    return choice(coding_questions)


class Code(BaseModel):
    code: str


@app.post("/submit-code")
def submit_code(data: Code):

    if len(data.code) < 20:
        return {
            "score": 4,
            "feedback": "Your solution is too short. Add more logic."
        }

    return {
        "score": 9,
        "feedback": "Good solution! Keep practicing."
    }
from random import choice

coding_questions = [
    {
        "title": "Reverse a String",
        "description": "Write a program to reverse a string."
    },
    {
        "title": "Palindrome Number",
        "description": "Check whether a number is palindrome."
    },
    {
        "title": "Factorial",
        "description": "Find factorial of a number."
    }
]

class Code(BaseModel):
    code: str

@app.get("/coding-question")
def coding_question():
    return choice(coding_questions)

@app.post("/submit-code")
def submit_code(data: Code):

    if len(data.code) < 20:
        return {
            "score": 4,
            "feedback": "Your solution is too short."
        }

    return {
        "score": 9,
        "feedback": "Good solution! Keep practicing."
    }