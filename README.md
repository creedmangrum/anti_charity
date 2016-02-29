# anti_charity

## Development

anti_charity is a simple Flask application backed with a PostgreSQL database.  SQLAlchemy is the ORM used with the
service.  To get up and running, first clone the repo:

    $ git clone git@bitbucket.org:kyruus/anti_charity.git

Currently the only requirements to develop locally are python 2.7, PostgreSQL, and virtualenv.  Assuming you have all
that let's first create your virtualenv ([how to use virtualenvs](https://kyruus.jira.com/wiki/display/eng/Working+with+python+virtualenvs)) and activate it.

    $ virtualenv ~/.virtualenvs/anti_charity --no-site-packages
    $ . ~/.virtualenvs/anti_charity/bin/activate

Next, install the requirements

    $ pip install -r requirements.txt

You may need to enter the following command if you are running on OSX Mavericks:

    $ export ARCHFLAGS="-Wno-error=unused-command-line-argument-hard-error-in-future"

Next we'll need to setup the database.  If you haven't already, create a user with the username 'kyruus' and password
of 'kyruus123'.  NOTE - The following will create a user with username 'kyruus' and you will be prompted to enter the
password

    $ createuser -P -s -e kyruus

Next, you will need to create the dev database and test database, to do so simply run the following command:

    $ python manage.py setup_db

Now that you have the database created, you need to apply the migrations which will create the necessary tables, simply run the following. If you just created the project, you will not have any migrations to apply, so skip to the section Database Migrations below:

    $ python manage.py db upgrade

In order to log in using SSO locally, your server must be running on the "kyruus.com". To do this, edit your `/etc/hosts` file and add the following:

    # Localhost alias for SSO
    127.0.0.1   lcl.kyruus.com

To run the app, simply:

    $ python manage.py runserver

The app will be available at `lcl.kyruus.com:5000`

If you need a shell and have the app initialized simply run:

    $ python manage.py shell

To run the unit tests:

    $ python manage.py test

## Database Migrations

NOTE: Before you can create migrations you have to first initialize alembic, you only have to do this once.  All you
need to do is run the following:

    $ python manage.py db init

This will setup alembic and create a migrations folder.  Now, when you run migrate a new version will be created under
migrations/versions

anti_charity uses alembic to manage database migrations.  Alembic will recognize most changes to your models and
auto generate a migration for that.  As an example, let's say you want to create a new survey.  Simply create your model
and then run the following command:

    $ python manage.py db migrate

This will generate a migration script and place it in migrations/versions.  Be sure to inspect the migration to insure
that it's correct, alembic will detect most changes but things like indexes you will need to add manually.  To execute
the migration and have it reflected in your database run:

    $ python manage.py db upgrade

Now let's say you need to add a column, simply add the column to your model and run migrate again:

    $ python manage.py db migrate

Again, this will create a new migration in migrations/version, and like before, run the upgrade command to execute it.
