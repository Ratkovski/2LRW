from flask import Flask

from shawee.ext import config


def create_app(import_name='shawee'):
    app = Flask(import_name)
    config.init_app(app)
    return app