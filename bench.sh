SQL_USER="D9MOK@GOLZK.com"

echo "SQL_USER=$SQL_USER"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiRDlNT0tAR09MWksuY29tIiwidXVpZCI6ImExMTE0NzJhLTlhOTktNDQyMS1hNDU0LWUwNjQ3NmYyMWRhMSJ9LCJ1bmFtZSI6IkQ5TU9LQEdPTFpLLmNvbSIsInRva2VuX2lkIjoiYTExMTQ3MmEtOWE5OS00NDIxLWE0NTQtZTA2NDc2ZjIxZGExX3RkL05BbDBUNndIQWZTaUpUaDFFb0FkWFpKQW9tLzlsMUZ4TkFkTllUeGhBbkh5Q3EzMmRYUkhNdmY1TXp0dk5FWWc9XzE2NDU2MzI4MDUzMDYiLCJleHAiOjE2NDU2MzY0MDUzMDYsImlhdCI6MTY0NTYzMjgwNTMwNiwiY3NyZl90b2tlbiI6IkcwbkpvdGoxZ3ZQZkZ2TVZvdWhOd2N6eWl1QmE3ODVoY0xOWS9zV2I0WEhGZUFoN2JiRVBzQzVVVDUycXNHZGpiVnhXQm93K2xHbnBub0FOZTlZaWpkdHROOWdJZm9vcEJPMEpibGFQdFlMQVdBbVh1MDlSZS9BUkVaQmJwL0ZQQTBnb0tnPT0ifQ.wE61dSC1cfJHTgJm23nYKKnMmdHsBk9Gsqk9kJk8PEE"

csrf_token="G0nJotj1gvPfFvMVouhNwczyiuBa785hcLNY/sWb4XHFeAh7bbEPsC5UT52qsGdjbVxWBow+lGnpnoANe9YijdttN9gIfoopBO0JblaPtYLAWAmXu09Re/AREZBbp/FPA0goKg=="

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/login_status/" 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user/"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1&limit=20"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1000&limit=20"

