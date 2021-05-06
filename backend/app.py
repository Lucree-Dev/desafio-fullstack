import datetime
from datetime import datetime
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
    first_name = db.StringField(max_length=50)
    last_name = db.StringField(max_length=50)
    birthday = db.StringField()
    password = db.StringField(max_length=200)
    username = db.StringField(max_length=200)
    user_id = db.UUIDField(binary=False, default=uuid4(), required=True)


@app.route("/account/person", methods=["POST"])
def save():
    data = json.loads(request.data)
    person = Person(first_name=data['first_name'], last_name=data['last_name'],
                    birthday=data['birthday'],
                    password=generate_password_hash(data['password']), username=data['username']).save()
    return jsonify(person)


@app.route("/account/friends")
def list():
    people = Person.objects().to_json()
    return Response(people, mimetype="application/json", status=200)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
