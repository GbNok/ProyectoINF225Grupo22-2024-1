import json
import requests as rq

# print(json.loads(rq.get(f"http://127.0.0.1:8080/analista").text))
print(json.loads(rq.get("http://127.0.0.1:8080/users").text))

a = {"nombre": "testa", "email": "asha.man@pm.me", "password": "123", "rut": "12331133"}
e = {"nombre": "teste", "email": "asha.man@pm.me", "password": "123", "rut": "12331133"}
s = {"nombre": "tests", "email": "asha.man@pm.me", "password": "123", "rut": "12331133"}

res = rq.post("http://127.0.0.1:8080/users/",  json=a)
res = rq.post("http://127.0.0.1:8080/users/",  json=e)
res = rq.post("http://127.0.0.1:8080/users/",  json=s)
