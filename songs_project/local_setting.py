# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-g^2aq+6=_2^%8#5$#aho$6)albfv)azwo$l9mix1h)8o9(^t0+'

# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'songs_database',
        'HOST': 'localhost',
        'USER': 'root',
        'PASSWORD': 'password',
    }
}