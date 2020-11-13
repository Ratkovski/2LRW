import click
from shawee.ext.db.commands import create_db, drop_db
# from shawee.ext.auth.controller import create_user


def init_app(app):
    app.cli.add_command(app.cli.command()(create_db))
    app.cli.add_command(app.cli.command()(drop_db))
    # @app.cli.command()
    # @click.option('--nome', prompt=True, required=True)
    # @click.option('--telefone', prompt=True, required=True, hide_input=True, confirmation_prompt=True)
    # @click.option('--email', prompt=True, required=True)
    # @click.option('--password', prompt=True, required=True)
    # @click.option('--proprietario', prompt=True, required=True, default=False)
    # def adduser(nome, telefone, email, password, proprietario):
    #     """Cria um novo usuario"""
    #     with app.app_context():
    #         try:
    #             create_user(nome, telefone, email, password, proprietario)
    #         except Exception as e:
    #             click.echo(f'Nao foi possivel criar o usuario {nome}')
    #             raise
    #         else:
    #             click.echo(f"Usuario {nome} criado com sucesso!")
