from urllib.parse import urlparse
import ipaddress

SHORTENERS = [
    "bit.ly",
    "tinyurl.com",
    "t.co",
    "goo.gl",
    "is.gd"
]


def analyze_url(url):

    parsed = urlparse(url)

    hostname = parsed.hostname or ""

    score = 100

    risks = []

    https = parsed.scheme == "https"

    if not https:

        score -= 20

        risks.append("Tidak menggunakan HTTPS.")

    try:

        ipaddress.ip_address(hostname)

        score -= 20

        risks.append("Menggunakan IP Address.")

    except:

        pass

    short = hostname in SHORTENERS

    if short:

        score -= 15

        risks.append("Menggunakan layanan Short URL.")

    if len(hostname.split(".")) < 2:

        score -= 20

        risks.append("Domain tidak valid.")

    score = max(score, 0)

    if score >= 80:

        status = "🟢 Safe"

    elif score >= 50:

        status = "🟡 Suspicious"

    else:

        status = "🔴 Dangerous"

    return {

        "status": status,

        "score": score,

        "https": https,

        "domain": hostname,

        "ip": hostname.replace(".", "").isdigit(),

        "short": short,

        "risks": risks

    }