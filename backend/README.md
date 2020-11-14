# Desafio - Linker

### Inicização do ambiente

1. Criar virtualenv e ativar

```
    virtualenv venv
    source venv/bin/activate
```

2. Instalar requirements
   linux

```
    make install
```

windows

```
    pip install -r requirements.txt
```

3. Criar SECRET-KEY
   criar arquivo .secrets.toml na raiz do projeto mesmo local do setup.py e preencher com

```
    [default]
    SECRET_KEY = "shaweeprotected"
```

4. Setar ambiente
   linux

```
    export FLASK_APP=shawee/app.py
    export FLASK_ENV=development
```

windows

```
    set FLASK_APP=shawee/app.py
    set FLASK_ENV=development
```

5. Inicializar banco

```
    flask db init
    make init-db
```

6. Popular banco
   linux

```
    make populate
```

windows

```
    sqlite3 shawee/database.db < scripts/User.sql
	sqlite3 shawee/database.db < scripts/Category.sql
	sqlite3 shawee/database.db < scripts/Transaction.sql
```

7. Executar aplicação

```
    make run
```

### Estrutura

```
backend
|____wsgi.py
|____scripts
| |____User.sql
| |____scripts.sql
| |____Hachathon_-_Linker_2020-11-12_09_20.xml
| |____vertabelo_flask_sqlalchemy.py
| |____Transactions.sql
| |____Category.sql
|____LICENCE
|____Makefile
|____README.md
|____shawee
| |______init__.py
| |____ext
| | |____controller
| | | |______init__.py
| | | |____controller.py
| | |______init__.py
| | |____config.py
| | |____cli.py
| | |____site
| | | |______init__.py
| | | |____main.py
| | |____db
| |   |______init__.py
| |   |____models.py
| |   |____commands.py
| |____database.db
| |____app.py
|
|____requirements.txt
|____setup.py
|____settings.toml
```

Lucas esteve aqui
