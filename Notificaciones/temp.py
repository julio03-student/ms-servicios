# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
from flask import Flask
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from flask import request
from twilio.rest import Client

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello world!"

@app.route("/correo")
def enviarCorreo():
    destino = request.args.get("destino")
    asunto = request.args.get("asunto")
    mensaje = request.args.get("mensaje")
    hashString = request.args.get("hash")
    
    if hashString == os.environ.get("SECURITY_HASH"):
        message = Mail(
            from_email= os.environ.get("EMAIL_FROM"),
            to_emails= destino,
            subject= asunto,
            html_content = mensaje)
        try:
            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            print("enviado")
            return "OK"
        except Exception as e:
            print(e.message)
            return "KO"
    else:
        print("Hash error")
        return "KO"
    
@app.route("/sms")
def enviarSms():
    destino = request.args.get("destino")
    mensaje = request.args.get("mensaje")
    hashString = request.args.get("hash")
    
    if hashString == os.environ.get("SECURITY_HASH"):
       
        try:
            account_sid = os.environ['TWILIO_ACCOUNT_SID']
            auth_token = os.environ['TWILIO_AUTH_TOKEN']
            client = Client(account_sid, auth_token)

            message = client.messages \
                .create(    
                     body=mensaje,
                     from_='+13202807352',
                     to='+57'+destino
                 )

            print(message.sid)
            print("enviado sms")
            return "OK"
        except Exception as e:
            print(e)
            return "KO"
    else:
        print("Hash error")
        return "KO"
   

if __name__ == "__main__":
    app.run()
    
    
    #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