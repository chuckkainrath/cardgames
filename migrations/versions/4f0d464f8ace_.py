"""empty message

Revision ID: 4f0d464f8ace
Revises: 9fc979d8fcc7
Create Date: 2021-08-02 15:29:53.315899

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4f0d464f8ace'
down_revision = '9fc979d8fcc7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('ratio', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'ratio')
    # ### end Alembic commands ###
