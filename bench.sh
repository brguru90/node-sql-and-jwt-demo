SQL_USER="818XX@91177.com"

echo "SQL_USER=$SQL_USER"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiODE4WFhAOTExNzcuY29tIiwidXVpZCI6IjNjN2YzZDYyLTYyMGYtNGZmNy05M2ZhLWFlNzNhNWU3ZDEwMiJ9LCJ1bmFtZSI6IjgxOFhYQDkxMTc3LmNvbSIsInRva2VuX2lkIjoiM2M3ZjNkNjItNjIwZi00ZmY3LTkzZmEtYWU3M2E1ZTdkMTAyXy9HVkFJMlRBZHRMclBUbmRiT2JZQ3hTU1dzM0VzcVkzTnh1OEdvTWw4WDdma1FwMythcmgwMTQ2WUE3WU1zQWFaa1k9XzE2NDUzNjgzOTI5NjciLCJleHAiOjE2NDUzNzE5OTI5NjcsImlhdCI6MTY0NTM2ODM5Mjk2NywiY3NyZl90b2tlbiI6IlZxU0tLWGw3L0pjVWZzVEVITEZ3SnN5cy93MlEybkFRYzl5UURKUVhrSGZBamVSWTVGb2wxdmNJV3Q1NCtJRXdBM2MrM2tQYVd1VnJKdjBrZ3dpaEpFTDB4aDM0b01hVC9xOSt2UE9rZGwrZ1NUZFpEOTFZZEYvb29MU1FMQzBPTE5IMFhRPT0ifQ.CLs6sbjtv_IpYWKVeL7AkaZ-AOu_QkMf69wEl-CO4UI"

csrf_token="VqSKKXl7/JcUfsTEHLFwJsys/w2Q2nAQc9yQDJQXkHfAjeRY5Fol1vcIWt54+IEwA3c+3kPaWuVrJv0kgwihJEL0xh34oMaT/q9+vPOkdl+gSTdZD91YdF/ooLSQLC0OLNH0XQ=="

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/login_status/" 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user/"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1&limit=1000"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1000&limit=1000"

