import datetime
import json
import os
from uuid import uuid4

from flask_cors import CORS
from flask import Flask, Response, request, jsonify
from flask_mongoengine import MongoEngine
from werkzeug.security import generate_password_hash

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'host': os.environ['MONGODB_HOST'],
    'username': os.environ['MONGODB_USERNAME'],
    'password': os.environ['MONGODB_PASSWORD'],
    'db': 'webapp'
}

db = MongoEngine()
db.init_app(app)
CORS(app)


class Person(db.Document):
    first_name = db.StringField()
    last_name = db.StringField()
    birthday = db.StringField()
    password = db.StringField()
    username = db.StringField()
    user_id = db.StringField(default=str(uuid4()))


class BillingCard(db.Document):
    title = db.StringField()
    pan = db.StringField()
    expiry_mm = db.StringField()
    expiry_yyyy = db.StringField()
    security_code = db.StringField()
    date = db.StringField()
    card_id = db.StringField(default=str(uuid4()))


class Transfer(db.Document):
    user_id = db.StringField()
    friend_id = db.StringField()
    total_to_transfer = db.IntField()
    date = db.DateTimeField(default=datetime.date.today())
    billing_card = db.StringField()


class TransferDto:
    def __init__(self, user_id, friend_id, value, date, from_card):
        self.user_id = user_id
        self.friend_id = friend_id
        self.value = value
        self.date = date
        self.from_card = from_card


@app.route("/account/person", methods=["POST"])
def save_person():
    try:
        data = json.loads(request.data)
        person = Person(first_name=data['first_name'], last_name=data['last_name'],
                        birthday=data['birthday'],
                        password=generate_password_hash(data['password']), username=data['username'])
        person.save()
    except:
        return Response('Error when registering person', mimetype="application/json", status=400)

    return Response('Successfully created person ', mimetype="application/json", status=200)


@app.route("/account/friends")
def list_friends():
    people = Person.objects().to_json()
    return Response(people, mimetype="application/json", status=200)


@app.route("/account/card", methods=["POST"])
def save_card():
    try:
        data = json.loads(request.data)
        card = BillingCard(title=data['title'], pan=data['pan'],
                           expiry_mm=data['expiry_mm'], expiry_yyyy=data['expiry_yyyy'],
                           security_code=data['security_code'], date=data['date'])
        card.save()
    except:
        return Response('Error when registering billing card', mimetype="application/json", status=400)

    return Response('Successfully created billing card', mimetype="application/json", status=200)


@app.route("/account/cards")
def list_cards():
    cards = BillingCard.objects().to_json()
    return Response(cards, mimetype="application/json", status=200)


@app.route("/account/transfer", methods=["POST"])
def save_transfer():
    try:
        data = json.loads(request.data)
        card = BillingCard.objects(card_id=data['billing_card']['card_id']).first()
        transfer = Transfer(friend_id=data['friend_id'], user_id=data['user_id'],
                            billing_card=card['card_id'],
                            total_to_transfer=data['total_to_transfer'])
        transfer.save()
    except:
        return Response('Error when performing transfer', mimetype="application/json", status=400)

    return Response('Successfully transfer', mimetype="application/json", status=200)


@app.route("/account/bank-statement")
def list_bank_statemens():
    list_statements = []
    for bank_statement in Transfer.objects:
        list_statements.append(TransferDto(bank_statement['user_id'], bank_statement['friend_id'],
                                           bank_statement['total_to_transfer'],
                                           bank_statement['date'].strftime('%d/%m/%Y'),
                                           bank_statement['billing_card']))

    return Response(json.dumps([ob.__dict__ for ob in list_statements]), mimetype="application/json", status=200)


@app.route("/account/bank-statement/<string:userid>")
def list_bank_statemens_by_user(userid):
    bank_statements = Transfer.objects(user_id=userid).to_json()
    return Response(bank_statements, mimetype="application/json", status=200)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
