SQL_USER="818XX@91177.com"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiODE4WFhAOTExNzcuY29tIiwidXVpZCI6IjNjN2YzZDYyLTYyMGYtNGZmNy05M2ZhLWFlNzNhNWU3ZDEwMiJ9LCJ1bmFtZSI6IjgxOFhYQDkxMTc3LmNvbSIsInRva2VuX2lkIjoiM2M3ZjNkNjItNjIwZi00ZmY3LTkzZmEtYWU3M2E1ZTdkMTAyX0U4RUpHamVHeDQ2Wm50UFBKQTNFL1hNeEJPbnRseS9CZnhzeThnUFhtWGtUREJkWDhYa3ZqWjBPVHlGdWZBeXo4eDA9XzE2NDUzNDIxMDQ2ODUiLCJleHAiOjE2NDUzNDU3MDQ2ODUsImlhdCI6MTY0NTM0MjEwNDY4NSwiY3NyZl90b2tlbiI6InhGRk14amxSWnZmeVZxeXVCRXppL09vSUVRcFl1RHpCd2xnZjZMRFpUWm5zSDVCbzJxbDgvZDA4N2l5R1RBRTNGdEVjTGdvM1lKVHJjWjhGRzd4U3g1Q2NSVHZ4ekZtZEJmb3J6MGxZdnlSTXhUa3JlcWVvUVlCMXlTQUpPQXJqQ2kwaHpnPT0ifQ.xF6gtiAbtXEJrrPDJ4Ono1b5Vd7ER-Ki0ykpA6ZW_hE"

csrf_token="xFFMxjlRZvfyVqyuBEzi/OoIEQpYuDzBwlgf6LDZTZnsH5Bo2ql8/d087iyGTAE3FtEcLgo3YJTrcZ8FG7xSx5CcRTvxzFmdBforz0lYvyRMxTkreqeoQYB1ySAJOArjCi0hzg=="

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 100 http://localhost:8080/api/login_status/ 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 http://localhost:8080/api/user/

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 http://localhost:8080/api/user?page=1&limit=100

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 http://localhost:8080/api/user?page=999&limit=100


