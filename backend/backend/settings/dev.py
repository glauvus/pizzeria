from backend.settings.base import *
import dj_database_url

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'SECRET_KEY'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["backend", "localhost", "127.0.0.1"]

DATABASES = {}
DATABASES['default'] = dj_database_url.config(default='postgres://xhgtnopntgogzd:332cd9084a7e598f4051790d06bb6bb28b2787dfbf80be36270c4d76f91b8907@ec2-34-235-240-133.compute-1.amazonaws.com:5432/dfjeu1lef0o2ho', conn_max_age=600, ssl_require=True)
