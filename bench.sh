SQL_USER="CU1R9@AMS1B.com"


access_token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiYWEiLCJ1dWlkIjoiODQ0ODc2NzktMGM3Ny00NTY5LTgwZTctY2QyZjIyMTliMmMwIn0sInVuYW1lIjoiYWEiLCJ0b2tlbl9pZCI6Ijg0NDg3Njc5LTBjNzctNDU2OS04MGU3LWNkMmYyMjE5YjJjMF82NTdfMTY0NTEyNjY0NTg0MCIsImV4cCI6MTY0NTEyODQ0NTg0MCwiaWF0IjoxNjQ1MTI2NjQ1ODQwLCJjc3JmX3Rva2VuIjoiNlFxL0ZxNWtUMjJ4TU5ld3JJb1JzTXdXZ3JBbTRqZWJBRG11QWN0S3VjK1NlOGNVNGFBaGxiYmdtZmE4Tkppa3pRV3VjVFpHWFpJMldwNXowTXl3Y0wyTmU3Ujk3QzlwMWwyaHE4cVh1b2RLWGZrSW9YRWIvelcrclhmUVQrMjRYVk9JdlE9PSJ9.QveeA6WHIg7MH_YpgH6ya4aH42vtNAs2SF4vrLdU-Pg"

csrf_token="6Qq/Fq5kT22xMNewrIoRsMwWgrAm4jebADmuActKuc+Se8cU4aAhlbbgmfa8NJikzQWucTZGXZI2Wp5z0MywcL2Ne7R97C9p1l2hq8qXuodKXfkIoXEb/zW+rXfQT+24XVOIvQ=="

ab -C "access_token=$access_token" -H "csrf_token: 4QERfQAgRwnPcMhmRn0zoIlufFSDb1AmyTyXaFsiKZ3Bw+6Bsx6VEolLMh8iEBJIJSEBXi9w5OsFKPjO455pBYXEQ03kHnBbFIMzUH3hC1E87wzcUqcpXQZGEgPQKGzTQkFwlw==" -n 100000 -c 100 http://localhost:8080/api/login_status/ 

ab -C "access_token=$access_token" -H "csrf_token: $csrf_token" -n 100000 -c 1000 http://localhost:8080/api/user/

