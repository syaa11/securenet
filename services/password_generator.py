import random
import string


def generate_password(
    length=16,
    uppercase=True,
    lowercase=True,
    numbers=True,
    symbols=True
):

    characters = ""

    if uppercase:
        characters += string.ascii_uppercase

    if lowercase:
        characters += string.ascii_lowercase

    if numbers:
        characters += string.digits

    if symbols:
        characters += "!@#$%^&*()_-+=<>?"

    if not characters:
        return {
            "password": "",
            "error": "Pilih minimal satu jenis karakter."
        }

    password = "".join(random.choice(characters) for _ in range(length))

    return {
        "password": password
    }