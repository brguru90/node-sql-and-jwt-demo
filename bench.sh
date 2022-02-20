SQL_USER="818XX@91177.com"

echo "SQL_USER=$SQL_USER"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiODE4WFhAOTExNzcuY29tIiwidXVpZCI6IjNjN2YzZDYyLTYyMGYtNGZmNy05M2ZhLWFlNzNhNWU3ZDEwMiJ9LCJ1bmFtZSI6IjgxOFhYQDkxMTc3LmNvbSIsInRva2VuX2lkIjoiM2M3ZjNkNjItNjIwZi00ZmY3LTkzZmEtYWU3M2E1ZTdkMTAyX0FHV3N2UUt4OHBhc3pyaXM4QjNjSDVHaG5TUlllMzlVMjFOYnZNK0ZCT0MvVXFpRlRaZTFBMXZHMGFsU2xOVkJ4dGs9XzE2NDUzNTg1NjAwNjYiLCJleHAiOjE2NDUzNjIxNjAwNjYsImlhdCI6MTY0NTM1ODU2MDA2NiwiY3NyZl90b2tlbiI6IlZGUmFLSzlqYmpTdHJ1VlpDTUpsOW5vcTRFbm9SSnpUeHUwRXJNQ04waVlOMHV0WG40b3R3ZzhyNTlISU9OeDhOVTZNY3p3ZFgxTld0ZzRHbWRMazR1L0xkK0xDVHozQVRrZTJ5RmpjaGNreU8vb3dwZnBXQ0lVSVRHQkIybXNpSFZvQ213PT0ifQ.-2GvcK-9fz15TxqqpwA0XvICQS9UlPRv5jNFiwjWOdM"

csrf_token="VFRaKK9jbjStruVZCMJl9noq4EnoRJzTxu0ErMCN0iYN0utXn4otwg8r59HIONx8NU6MczwdX1NWtg4GmdLk4u/Ld+LCTz3ATke2yFjchckyO/owpfpWCIUITGBB2msiHVoCmw=="

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/login_status/" 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user/"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1&limit=20"

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 -l "http://localhost:8080/api/user?page=1000&limit=20"

