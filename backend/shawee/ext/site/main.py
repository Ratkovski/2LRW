from flask import Blueprint, jsonify, request
# from shawee.ext.db.controller import create_reserva, verifica_pagamento
from shawee.ext.db.models import User, Category, Transactions
from shawee.ext.db import db


from datetime import datetime, date, time
import pendulum


bp = Blueprint("site", __name__)


@bp.route('/', methods=['GET', 'POST'])
def index():
    return 'Deu certo aqui'


@bp.route('/user', methods=['POST'])
def user():
    id = int(request.form['id'])
    user = User.query.filter_by(id=id).first()

    result = {
        'id': id,
        'name': user.name
    }
    return jsonify(result)


""" 
data inicial e final
caixa atual
total de movimentações
"""


@bp.route('/transactions', methods=['POST'])
def transactions():
    """ 
        Returna todas as transações de um usuario
    """
    id = int(request.form['id'])
    transaction = Transactions.query.filter_by(user_id=id).all()

    result = []

    for trans in transaction:
        result.append(trans.to_dict())

    return jsonify(result)



@bp.route('/category', methods=['POST'])
def category():
    """
        Retorna transações por categoria e data
    """
    id = int(request.form['id'])
    category = int(request.form['category'])
    datain = request.form['datain']
    dataout = request.form['dataout']
    
    transaction = Transactions.query.filter(Transactions.date.between(datain, dataout)).filter_by(user_id=id,category_id=category).all()
    
    result = []

    for trans in transaction:
        result.append(trans.to_dict())

    return jsonify(result)

@bp.route('/users', methods=['GET'])
def idex_users():
    users = User.query.all()
    print(users)
    # return jsonify(transaction)
    user_list = []
    for user in users:
        user_list.append(user.to_dict())
    return jsonify(user_list)