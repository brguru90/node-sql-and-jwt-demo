SQL_USER="CU1R9@AMS1B.com"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiQ1UxUjlAQU1TMUIuY29tIiwidXVpZCI6IjZlNTEzODVmLTlmOWYtNGEzZS1iYzc3LTEwMGE2NmE5YjlmMiJ9LCJ1bmFtZSI6IkNVMVI5QEFNUzFCLmNvbSIsInRva2VuX2lkIjoiNmU1MTM4NWYtOWY5Zi00YTNlLWJjNzctMTAwYTY2YTliOWYyXzgyXzE2NDUxMjA2NzU4MzEiLCJleHAiOjE2NDUxMjA5NzU4MzEsImlhdCI6MTY0NTEyMDY3NTgzMSwiY3NyZl90b2tlbiI6Ill1M0pmaUx2YnNaSkFiZ2dwVndCb1Z0amU1cWhBdGs5YWNtTUdLSFZnTUZJNTN5c3NXTUxldmk2RldGditVSENMVUJUeTNER0JiRDJpb0djVTJYVnFpRW5mSkl1YVhvdkRjSExDYVBNSmxiL09TM2FuQzF4b2pJNVJpRTZZSzdvTXlOSGtRPT0ifQ.YfnBMhMiOnVCl9dVjbUDOCfr5fXpNqcX5qXuIhDqi7k"

csrf_token="Yu3JfiLvbsZJAbggpVwBoVtje5qhAtk9acmMGKHVgMFI53yssWMLevi6FWFv+UHCLUBTy3DGBbD2ioGcU2XVqiEnfJIuaXovDcHLCaPMJlb/OS3anC1xojI5RiE6YK7oMyNHkQ=="

ab -C "access_token=$access_token" -H "csrf_token: 4QERfQAgRwnPcMhmRn0zoIlufFSDb1AmyTyXaFsiKZ3Bw+6Bsx6VEolLMh8iEBJIJSEBXi9w5OsFKPjO455pBYXEQ03kHnBbFIMzUH3hC1E87wzcUqcpXQZGEgPQKGzTQkFwlw==" -n 100000 -c 100 http://localhost:8080/api/login_status/

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 http://localhost:8080/api/users/

