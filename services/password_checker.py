import math
import re


def analyze_password(password):

    score = 0

    suggestions = []

    length = len(password)

    if length >= 12:
        score += 25
    elif length >= 8:
        score += 15
    else:
        suggestions.append("Gunakan minimal 12 karakter")

    if re.search(r"[A-Z]", password):
        score += 15
    else:
        suggestions.append("Tambahkan huruf besar")

    if re.search(r"[a-z]", password):
        score += 15
    else:
        suggestions.append("Tambahkan huruf kecil")

    if re.search(r"\d", password):
        score += 15
    else:
        suggestions.append("Tambahkan angka")

    if re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        score += 20
    else:
        suggestions.append("Tambahkan simbol")

    if "123" in password.lower() \
        or "password" in password.lower():

        suggestions.append("Hindari kata yang umum")

        score -= 15

    score = max(0, min(score, 100))

    entropy = round(length * math.log2(94), 2)

    if score >= 90:

        strength = "Very Strong"

        crack = "Billions of Years"

    elif score >= 75:

        strength = "Strong"

        crack = "Hundreds of Years"

    elif score >= 60:

        strength = "Medium"

        crack = "Several Years"

    elif score >= 40:

        strength = "Weak"

        crack = "Several Days"

    else:

        strength = "Very Weak"

        crack = "Several Minutes"

    return {

        "score": score,

        "strength": strength,

        "entropy": entropy,

        "crack_time": crack,

        "suggestions": suggestions

    }