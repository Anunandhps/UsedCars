import smtplib
import getpass
  

def sentmail():
    
    HOST = "smtp-mail.outlook.com"
    PORT = 587

    FROM_EMAIL = "athuldas834@outlook.com"
    TO_EMAIL = "anunandhps125@gmail.com"
    PASSWORD = "athuldas@123"

    SUBJECT = "Test Mail"
    BODY = "Registration successful"

    message = f"Subject: {SUBJECT}\n\n{BODY}"

    smtp = smtplib.SMTP(HOST, PORT)

    status_code, response = smtp.ehlo()
    print(f"[*] Echoing the server: {status_code} {response}")

    status_code, response = smtp.starttls()
    print(f"[*] Starting TLS connection: {status_code} {response}")

    status_code, response = smtp.login(FROM_EMAIL, PASSWORD)
    print(f"[*] Logging in: {status_code} {response}")

    smtp.sendmail(FROM_EMAIL, TO_EMAIL, message)
    smtp.quit()
