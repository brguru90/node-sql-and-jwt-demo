SQL_USER="818XX@91177.com"

echo "SQL_USER=$SQL_USER"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiODE4WFhAOTExNzcuY29tIiwidXVpZCI6IjNjN2YzZDYyLTYyMGYtNGZmNy05M2ZhLWFlNzNhNWU3ZDEwMiJ9LCJ1bmFtZSI6IjgxOFhYQDkxMTc3LmNvbSIsInRva2VuX2lkIjoiM2M3ZjNkNjItNjIwZi00ZmY3LTkzZmEtYWU3M2E1ZTdkMTAyX0JpMk8wRitkc0dlR3pqei9CZjVvUmU2ZFRLblVZTjVaWHhqNTBqNFhxRW41TlY2bkNtZFVMcHZwaTRxL2I1RE1NT2M9XzE2NDUzNjAyNjUyNjQiLCJleHAiOjE2NDUzNjM4NjUyNjQsImlhdCI6MTY0NTM2MDI2NTI2NCwiY3NyZl90b2tlbiI6ImNtWE1yNDVlTUo1cWhxSWZzUkRpUmF3Y2lKK2ZmanRySTU2WWgyTDNUWFpxNW5SQTBRaDJiNks3QWpPUWUvWkRTVTJRaHNOUXdqNUZXV0NxR0tYNWQ3RE03TkV2U0s5ZjlySUlnUmRrOWE2NHdpQmFVWVJDMjZjZTd4QUJCQTkyRE1aY3pnPT0ifQ.3f6t62WzDncSrvBU060LVPR1DMrz7GEKi51PR0s6VXM"

csrf_token="cmXMr45eMJ5qhqIfsRDiRawciJ+ffjtrI56Yh2L3TXZq5nRA0Qh2b6K7AjOQe/ZDSU2QhsNQwj5FWWCqGKX5d7DM7NEvSK9f9rIIgRdk9a64wiBaUYRC26ce7xABBA92DMZczg=="

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/login_status/" 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user/"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1&limit=200"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1000&limit=200"

