SQL_USER="818XX@91177.com"

echo "SQL_USER=$SQL_USER"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiODE4WFhAOTExNzcuY29tIiwidXVpZCI6IjNjN2YzZDYyLTYyMGYtNGZmNy05M2ZhLWFlNzNhNWU3ZDEwMiJ9LCJ1bmFtZSI6IjgxOFhYQDkxMTc3LmNvbSIsInRva2VuX2lkIjoiM2M3ZjNkNjItNjIwZi00ZmY3LTkzZmEtYWU3M2E1ZTdkMTAyX29Ic2lSalZNQ3lFMG5YN2xiVVZGM1kwS1FYbjdhb01EU3Z1OFA1Wk1nc1pmSDYvNjhNdFRQS2dLZjRvU2x4NjZQMTQ9XzE2NDUzNTMzODY3NDMiLCJleHAiOjE2NDUzNTY5ODY3NDMsImlhdCI6MTY0NTM1MzM4Njc0MywiY3NyZl90b2tlbiI6IjR1TmdUUE1uQUpIV3AzR1JCZDFJR1FsMWtVRkhjeHdNOC9ESlpuK0JnMDg1UDBTY2g2YjdHM3krdmNXK3orK09yb1BRUVhTZnNBRk1qVFRUYU50S3hPRmxXZmNneHdLVG5RbEtwM1ZiV3Vtdk15YnFETXVGRXZIQWdOaUhhSmxXVXpqLzVBPT0ifQ.Do42NAuGHAwFzbUGH2890zJcwOtq_iRCdf4GBALkMH4"

csrf_token="4uNgTPMnAJHWp3GRBd1IGQl1kUFHcxwM8/DJZn+Bg085P0Sch6b7G3y+vcW+z++OroPQQXSfsAFMjTTTaNtKxOFlWfcgxwKTnQlKp3VbWumvMybqDMuFEvHAgNiHaJlWUzj/5A=="

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/login_status/" 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user/"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1&limit=20"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1000&limit=20"

