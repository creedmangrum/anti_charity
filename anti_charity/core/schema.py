# import graphene
# from graphene import relay
# from graphene.contrib.sqlalchemy import SQLAlchemyNode, SQLAlchemyConnectionField
# from models import DB, Goal as GoalModel, User as UserModel, AntiCharity as AntiCharityModel
#
# schema = graphene.Schema()
#
#
# @schema.register
# class Goal(SQLAlchemyNode):
#     class Meta:
#         model = GoalModel
#
#
# @schema.register
# class User(SQLAlchemyNode):
#     class Meta:
#         model = UserModel
#
#
# @schema.register
# class AntiCharity(SQLAlchemyNode):
#     class Meta:
#         model = AntiCharityModel
#
#
# class Query(graphene.ObjectType):
#     node = relay.NodeField()
#     all_employees = SQLAlchemyConnectionField(User)
#
# schema.query = Query
