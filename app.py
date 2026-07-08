from flask import Flask, render_template, request, jsonify

# ==============================
# Services
# ==============================

from services.password_checker import analyze_password
from services.password_generator import generate_password
from services.url_checker import analyze_url
from services.phishing_detector import detect_phishing
from services.security_score import calculate_security_score
import json

app = Flask(__name__)

# ==========================================================
# PAGE ROUTES
# ==========================================================

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/tools")
def tools():
    return render_template("tools.html")


@app.route("/quiz")
def quiz():
    return render_template("quiz.html")


@app.route("/articles")
def articles():
    return render_template("articles.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")


# ==========================================================
# API ROUTES
# ==========================================================

@app.route("/api/password-check", methods=["POST"])
def password_check():

    data = request.get_json()

    password = data.get("password", "")

    result = analyze_password(password)

    return jsonify(result)


@app.route("/api/password-generator", methods=["POST"])
def password_generator():

    data = request.get_json()

    result = generate_password(

        length=data.get("length", 16),

        uppercase=data.get("uppercase", True),

        lowercase=data.get("lowercase", True),

        numbers=data.get("numbers", True),

        symbols=data.get("symbols", True)

    )

    return jsonify(result)


@app.route("/api/url-check", methods=["POST"])
def url_check():

    data = request.get_json()

    url = data.get("url", "")

    result = analyze_url(url)

    return jsonify(result)


@app.route("/api/phishing-check", methods=["POST"])
def phishing_check():

    data = request.get_json()

    email = data.get("email", "")

    result = detect_phishing(email)

    return jsonify(result)


@app.route("/api/security-score", methods=["POST"])
def security_score():

    data = request.get_json()

    result = calculate_security_score(

        data.get("password", 0),

        data.get("url", 0),

        data.get("phishing", 100)

    )

    return jsonify(result)

@app.route("/api/quiz")
def quiz_api():

    with open("data/quiz.json", encoding="utf-8") as file:

        quiz = json.load(file)

    return jsonify(quiz)


# ==========================================================
# MAIN
# ==========================================================

if __name__ == "__main__":

    app.run(
        debug=True,
        host="0.0.0.0",
        port=5000
    )