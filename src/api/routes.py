"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def handle_signup():
    name=request.json.get("name",None)
    password=request.json.get("password",None)
    email=request.json.get("email",None)
    user=User(
        name=name,
        email=email,
        password=generate_password_hash(password)
    )
    db.session.add(user)
    db.session.commit()
    return jsonify("User created!!"), 200

@api.route('/login', methods=['POST'])
def handle_login():
    password=request.json.get("password",None)
    email=request.json.get("email",None)
    user=User.query.filter_by(email=email).first()
    if not user:
        return jsonify("Email or password are incorret!"), 401
    if not check_password_hash(user.password,password):
        return jsonify("Email or password are incorret!"), 401
    token=create_access_token(identity=email)

    return jsonify(token=token), 200

@api.route('/getuser', methods=['GET'])
@jwt_required()
def handle_getuser():
    user_email=get_jwt_identity()
    user=User.query.filter_by(email=user_email).first()

    return jsonify(user.serialize())