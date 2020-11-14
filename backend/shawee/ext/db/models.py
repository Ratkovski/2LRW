from shawee.ext.db import db


class User(db.Model):
    __tablename__ = "User"
    id = db.Column('id', db.Integer, primary_key=True, nullable=False)
    name = db.Column('name', db.Unicode, nullable=False)
    balance = db.Column('balance', db.Numeric, nullable=False)

    def to_dict(self):
        return dict(
            id=self.id, 
            name=self.name,
            balance=float(self.balance)
        )


class Category(db.Model):
    __tablename__ = "Category"
    id = db.Column('id', db.Integer, primary_key=True, nullable=False)
    name = db.Column('name', db.Unicode, nullable=False)

    def to_dict(self):
        return dict(
            id=self.id,
            name=self.name
        )


class Transactions(db.Model):
    __tablename__ = "Transactions"
    id = db.Column('id', db.Integer, primary_key=True, nullable=False)
    value = db.Column('value', db.Numeric, nullable=False)
    date = db.Column('date', db.DateTime, nullable=False)
    
    # 0 - Somar no saldo total do cliente
    # 1 - Subtrait do salto total do cliente
    status = db.Column('status', db.Integer, nullable=False)
    
    user_id = db.Column('User_id', db.Integer, db.ForeignKey('User.id'), nullable=False)
    category_id = db.Column('Category_id', db.Integer, db.ForeignKey('Category.id'), nullable=False)

    user = db.relationship('User', foreign_keys=user_id)
    category = db.relationship('Category', foreign_keys=category_id)

    def __repr__(self):
        return str({
            'category': self.category.name,
            'value': float(self.value),
            'date': self.date.date().strftime("%d-%m-%Y"),
            'time': str(self.date.time())
        })


    def to_dict(self):
        return dict(
            category= self.category.name,
            value= float(self.value),
            date= self.date.date().strftime("%d-%m-%Y"),
            time= str(self.date.time())
        )