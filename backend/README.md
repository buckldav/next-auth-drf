# Backend

## Setup

```bash
cd backend
# Create virtual environment for installing packages
python -m venv env
# Windows - Activate venv
source env/Scripts/activate
# Linux - Activate venv
source env/bin/activate
# Install packages
pip install -r requirements.txt
```

### Environment Variables

Copy the environment example file. The .env file is where we will put our environment variables.

```bash
cp .env.example .env
```

Open a python shell and generate a token. Copy the output to your .env.

```python
import secrets
secrets.token_urlsafe(50)
```

Do this twice, once for the Django secret key and once for your JWT signing key. These keys are used in the cryptographic algorithms in our project, so NEVER expose them publicly, especially by pushing them to GitHub. Make sure your environments are always in a .gitignore file.

Your .env file should now look something like this (with your own keys for the `DJANGO_SECRET_KEY` and `JWT_SIGNING_KEY` variables).

```
DEBUG=True
DJANGO_SECRET_KEY=1_WeygccrtOfXvQC990fbIoYj_lkhJ1qSjPgj2l5LNDWQG94f_eYiqTwZOvTKzC-PZY
JWT_SIGNING_KEY=ef28trMesbQzu-RpYQi8de0C3Og7g5t8p1CwHCnWK4NJJT1EgMWwDGM2nqPre-bgt84
```

### Migrate Database and Create User

A database migration applies any changes in your application models to the actual database (in this case, a `db.sqlite3` flat-file database).

```bash
python manage.py migrate
```

Try creating a user. This will be on your local database, so you don't have to worry about it being super secure. Just pick a username/password combination that you can easily remember.

```bash
python manage.py createsuperuser
```

### Run Server

```bash
python manage.py runserver
```

Visit [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) and log in with the same credentials that you used to create your user account on the command line.
