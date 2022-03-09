SQL_USER="D9MOK@GOLZK.com"

echo "SQL_USER=$SQL_USER"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWEiLCJ1dWlkIjoiMWU2YjNiZGItNmM5MS00ZGVlLWIzOGUtZDYwMTVjMDIxZDg4In0sInVuYW1lIjoiYWEiLCJ0b2tlbl9pZCI6IjFlNmIzYmRiLTZjOTEtNGRlZS1iMzhlLWQ2MDE1YzAyMWQ4OF81dlAxNTJjb0RQRmo5Ky9HamZrZ3BlNVB3dTdXb3JlNGhadHEvM0V3VjZaa1E3aXZVUWFrZkgzYm1OSmhYeHdCeTJVPV8xNjQ2ODQ0ODI2MzkwIiwiZXhwIjoxNjQ2ODQ4NDI2MzkwLCJpYXQiOjE2NDY4NDQ4MjYzOTAsImNzcmZfdG9rZW4iOiJtU0lDSFZuMEdEd2Y5bUpMT0F0RGVWWGJJc1VUbW0ydzNHS2JsQTFFZ0dnaVhtbVI1MG15Ym5sRzFVWEpWS2lYZldMU2VlUGk2MUErdG5BUVJVUStCR1o0Qy9rTkRzbmo0Y29MNzNvTnhHb3NZUFlHNjhReEFVM0VQV2U0R25DU3p1YjlKQT09In0.ExGY77ps6JZVuDDXO_80SunhEfS-hgLMJ0Pqfxd-ooo"

csrf_token="mSICHVn0GDwf9mJLOAtDeVXbIsUTmm2w3GKblA1EgGgiXmmR50mybnlG1UXJVKiXfWLSeePi61A+tnAQRUQ+BGZ4C/kNDsnj4coL73oNxGosYPYG68QxAU3EPWe4GnCSzub9JA=="

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8000/api/login_status/" 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8000/api/user/"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8000/api/user?page=1&limit=20"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8000/api/user?page=1000&limit=20"

