from dynaconf import FlaskDynaconf
from flask_cors import CORS

def init_app(app):
    FlaskDynaconf(app)
    CORS(app)
    app.config.load_extensions("EXTENSIONS")