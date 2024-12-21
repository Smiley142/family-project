
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'family_tree_db',
        'USER': 'your_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# Add installed apps
INSTALLED_APPS += [
    'family_tree',
    'rest_framework',
    'tree',
]
