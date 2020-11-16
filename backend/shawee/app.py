from flask import Flask
from flask_cors import CORS, cross_origin

from shawee.ext import config


def create_app(import_name='shawee'):
    app = Flask(import_name)
    config.init_app(app)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    return app
