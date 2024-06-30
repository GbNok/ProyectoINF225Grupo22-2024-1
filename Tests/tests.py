import unittest
import requests as rq
import json

class LaClaveTest(unittest.TestCase):
    valid_user = None
    valid_request = None
    
    @classmethod
    def setUpClass(cls):
        cls.base_url = "http://127.0.0.1:8080"
        cls.valid_user = {"nombre": "Asha'man", "email": "asha.man@pm.me", "password": "123", "rut": "12331133", "user_type": 1}
        cls.valid_request = {"rut": "123123123", "valor_credito": 5243, "plazo": 19, "nombre": "Kakko", "estado": False, "tasa": 1, "id_ejecutivo": 3}

        
    @classmethod
    def tearDownClass(cls):
        del cls.valid_user
        del cls.valid_request
 
    def test_get_user(self):
        res = json.loads(rq.get(f"{self.base_url}/users").text)
        for i in range(len(res)):
            if res[i]["rut"] == "12331133":
                self.assertEqual(res[i]["nombre"], "Asha'mam")
    
    def test_create_user(self):
        res = rq.post(f"{self.base_url}/users/",  json=self.valid_user)
        self.assertEqual(res.status_code, 200)

    def test_create_request(self):
        res = rq.post(f"{self.base_url}/analista/", json=self.valid_request)
        self.assertEqual(res.status_code, 200)

    def test_get_requests(self):
        res = json.loads(rq.get(f"{self.base_url}/analista/").text)
        
        for i in range(len(res)):
            if res[i]["rut"] == "123123123" and res[i]["valor_credito"] == 3233:
                self.assertEqual(res[i]["rut"], self.valid_request["rut"])
                self.assertEqual(res[i]["nombre"], self.valid_request["nombre"])
                self.assertEqual(res[i]["valor_credito"], self.valid_request["valor_credito"])
                self.assertFalse(res[i]["estado"])
                self.assertEqual(res[i]["tasa"], self.valid_request["tasa"])
                self.assertEqual(res[i]["plazo"], self.valid_request["plazo"])

        
        # info = [{'id': 1, 'rut': '2020', 'nombre': 'test_user', 'valor_credito': 2323, 'estado': False, 'tasa': 1, 'plazo': 2, 'id_ejecutivo': 2}]
if __name__ == '__main__':
    unittest.main()
