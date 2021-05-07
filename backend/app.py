import json
import os
from uuid import uuid4

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


class Person(db.Document):
    first_name = db.StringField()
    last_name = db.StringField()
    birthday = db.StringField()
    password = db.StringField()
    username = db.StringField()
    user_id = db.UUIDField(binary=False, default=uuid4(), required=True)


class BillingCard(db.Document):
    title = db.StringField()
    pan = db.StringField()
    expiry_mm = db.StringField()
    expiry_yyyy = db.StringField()
    security_code = db.StringField()
    date = db.StringField()
    card_id = db.UUIDField(binary=False, default=uuid4(), required=True)


class Transfer(db.Document):
    user_id = db.StringField()
    friend_id = db.StringField()
    total_to_pay = db.IntField()
    billing_card = BillingCard


@app.route("/account/person", methods=["POST"])
def save_person():
    data = json.loads(request.data)
    person = Person(first_name=data['first_name'], last_name=data['last_name'],
                    birthday=data['birthday'],
                    password=generate_password_hash(data['password']), username=data['username'])
    person.save()
    return Response('Successfully created person ', mimetype="application/json", status=200)


@app.route("/account/friends")
def list_friends():
    people = Person.objects().to_json()
    return Response(people, mimetype="application/json", status=200)


@app.route("/account/card", methods=["POST"])
def save_card():
    data = json.loads(request.data)
    card = BillingCard(title=data['title'], pan=data['pan'],
                       expiry_mm=data['expiry_mm'], expiry_yyyy=data['expiry_yyyy'],
                       security_code=data['security_code'], date=data['date'])
    card.save()
    return Response('Successfully created billing card', mimetype="application/json", status=200)


@app.route("/account/cards")
def list_cards():
    cards = BillingCard.objects().to_json()
    return Response(cards, mimetype="application/json", status=200)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
