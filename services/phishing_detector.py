import re

KEYWORDS = [

    "urgent",

    "verify",

    "login",

    "click",

    "bank",

    "password",

    "winner",

    "free",

    "gift",

    "limited",

    "expired",

    "confirm",

    "security",

    "account"

]


def detect_phishing(email):

    score = 0

    reasons = []

    text = email.lower()

    found = []

    for word in KEYWORDS:

        if word in text:

            found.append(word)

            score += 8

    if found:

        reasons.append(

            "Keyword mencurigakan: "

            + ", ".join(found)

        )

    links = re.findall(

        r'https?://\S+',

        email

    )

    if len(links):

        score += 20

        reasons.append(

            f"Ditemukan {len(links)} link."

        )

    if "@" in email:

        score += 5

        reasons.append(

            "Terdapat alamat email."

        )

    score = min(score,100)

    if score >= 70:

        status = "🔴 High Risk"

    elif score >= 40:

        status = "🟡 Medium Risk"

    else:

        status = "🟢 Safe"

    return {

        "status": status,

        "score": score,

        "reasons": reasons

    }