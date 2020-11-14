install:
	pip install -e .

init-db:
	FLASK_APP=shawee/app.py flask create-db
	FLASK_APP=shawee/app.py flask db upgrade

run:
	FLASK_APP=shawee/app.py FLASK_ENV=development flask run

run-client:
	FLASK_APP=shawee/app.py FLASK_ENV=production flask run

set:
	export FLASK_APP=shawee/app.py
	export FLASK_ENV=development

populate:
	sqlite3 shawee/database.db < arquivos/User.sql
	sqlite3 shawee/database.db < arquivos/Category.sql
	sqlite3 shawee/database.db < arquivos/Transactions.sql
