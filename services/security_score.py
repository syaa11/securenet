def calculate_security_score(password_score,
                             url_score,
                             phishing_score):

    overall = round(

        (password_score +
         url_score +
         (100-phishing_score))

        /3

    )

    if overall>=90:

        status="Excellent"

    elif overall>=75:

        status="Good"

    elif overall>=60:

        status="Fair"

    else:

        status="Poor"

    return{

        "overall":overall,

        "status":status

    }