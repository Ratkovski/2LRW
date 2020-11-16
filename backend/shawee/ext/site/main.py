from flask import Blueprint, jsonify, request
from shawee.ext.db.models import User, Category, Transactions
from shawee.ext.db import db
import sqlite3
import os.path

from datetime import datetime, date, time
from flask_cors import CORS


bp = Blueprint("site", __name__)
CORS(bp)


@bp.route('/user', methods=['POST'])
def user():
    """
        Recebe id e retorna as espeficações do usuario 
    """
    data = request.get_json()
    user_id = data.get('id')
    user = User.query.filter_by(id=user_id).first()

    return jsonify(user.to_dict())


@bp.route('/transactions', methods=['POST'])
def transactions():
    """ 
        Returna todas as transações de um usuario
    """
    data = request.get_json()
    user_id = data.get('id')
    transaction = Transactions.query.filter_by(user_id=user_id).all()

    result = []

    for trans in transaction:
        result.append(trans.to_dict())

    return jsonify(result)


@bp.route('/category', methods=['POST'])
def category():
    """
        Retorna transações por categoria e um intervalo de tempo
    """
    data = request.get_json()
    user_id = data.get('id')
    category = data.get('category')
    datein = data.get('datein')
    dateout = data.get('dateout')

    transaction = Transactions.query.filter(Transactions.date.between(
        datein, dateout)).filter_by(user_id=user_id, category_id=category).all()

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


@bp.route('/transactions-by-category', methods=['POST'])
def transacitons_categorie():
    # recebe id do usuário e lista com o id das categorias
    data = request.get_json()
    user_id = data.get('id')
    category_ids = data.get('categories')

    transactions_category = []

    for category_id in category_ids:
        transaction = Transactions.query.filter_by(
            user_id=user_id, category_id=category_id).all()
        result = []
        for trans in transaction:
            result.append(trans.to_dict())
        category = Category.query.filter_by(id=category_id).first()

        transactions_category.append(dict(
            category=category.to_dict(),
            transactions=result
        ))
    return jsonify(transactions_category)


@bp.route('/total_value_month', methods=['POST'])
def total_value():
    """
        Recebe id, data inicio e data final e retorna total de por mês e ano 
    """
    data = request.get_json()
    user_id = data.get('id')
    str_in = data.get('datein')
    str_out = data.get('dateout')
    datein = datetime.strptime(str_in, '%d/%m/%Y').date()
    dateout = datetime.strptime(str_out, '%d/%m/%Y').date()
    BASE = os.path.abspath('')
    DB = os.path.join(BASE, 'shawee', 'database.db')
    conn = sqlite3.connect(DB)
    cursor = conn.cursor()

    transactions = cursor.execute(f""" 
        SELECT  round(sum(value), 2) as total,
                strftime('%m-%Y', date) as month,
                status
        FROM Transactions
        WHERE date BETWEEN '{datein}' and '{dateout}'
        AND User_id = {user_id}
        GROUP BY 2, 3, status;  
    """).fetchall()

    conn.close()

    result = []
    for aux in transactions:
        result.append(
            {
                'value': aux[0],
                'date': aux[1],
                'status': aux[2]
            }
        )

    return jsonify(result)


@bp.route('/categories', methods=['GET'])
def categories():
    """
        Retorna categoria e id
    """

    categories = Category.query.all()

    result = []

    for category in categories:
        result.append(category.to_dict())

    return jsonify(result)


@bp.route('/category_value_month', methods=['POST'])
def category_value_month():
    """
        Recebe id, data inicio e data final e retorna total de por mês e ano 
    """
    data = request.get_json()
    user_id = data.get('id')
    datein = data.get('datein')
    dateout = data.get('dateout')

    BASE = os.path.abspath('')
    DB = os.path.join(BASE, 'shawee', 'database.db')
    conn = sqlite3.connect(DB)
    cursor = conn.cursor()

    transactions = cursor.execute(f""" 
        SELECT  round(sum(value), 2) as total,
                strftime('%m-%Y', date) as month,
                status,
                Transactions.Category_id
        FROM Transactions inner join Category
                  on Transactions.Category_id = Category.id
        WHERE date BETWEEN '{datein}' and '{dateout}'
        AND User_id = {user_id}
        GROUP BY 2, 3, status, category_id;  
    """).fetchall()

    conn.close()

    result = []
    for aux in transactions:
        result.append(
            {
                'value': aux[0],
                'date': aux[1],
                'status': aux[2],
                'category': aux[3]
            }
        )

    return jsonify(result)
