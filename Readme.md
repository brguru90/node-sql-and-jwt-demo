# Testing Configuration [Node js Express server Benchmark]

```
  1. Postgres allocated buffer 2GB
  2. Postgres max connection 1200
  3. System memory 16GB
  4. AMD ryzen 7 5800H
  5. Hard disk
  6. OS : ubuntu 21
  7. PostgreSQL 13.4
```

## 1. pm2 execution mode: fork

### ROW Count =  1220001  
  
```
  1. JWT auth + redis block list
  2. Single record from DB at a time on 2nd benchmark  
  3. 20 record from starting
  4. 20 record from some where before end
```


```
SQL_USER=818XX@91177.com
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/login_status/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   38.416 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      32400000 bytes
HTML transferred:       11600000 bytes
Requests per second:    2603.06 [#/sec] (mean)
Time per request:       384.164 [ms] (mean)
Time per request:       0.384 [ms] (mean, across all concurrent requests)
Transfer rate:          823.62 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0   30 160.3      4    1039
Processing:   142  353 103.6    338     937
Waiting:        4  259  92.8    249     790
Total:        142  383 199.7    343    1674

Percentage of the requests served within a certain time (ms)
  50%    343
  66%    355
  75%    363
  80%    371
  90%    466
  95%    722
  98%   1327
  99%   1445
 100%   1674 (longest request)
```
```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   100.984 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      84600000 bytes
HTML transferred:       63700000 bytes
Requests per second:    990.26 [#/sec] (mean)
Time per request:       1009.837 [ms] (mean)
Time per request:       1.010 [ms] (mean, across all concurrent requests)
Transfer rate:          818.12 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.1      0      14
Processing:    26 1007 154.9    974    2096
Waiting:       12  999 154.2    967    2089
Total:         26 1007 154.8    974    2096

Percentage of the requests served within a certain time (ms)
  50%    974
  66%    993
  75%   1007
  80%   1015
  90%   1042
  95%   1281
  98%   1531
  99%   2076
 100%   2096 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   126.518 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1229800000 bytes
HTML transferred:       1208600000 bytes
Requests per second:    790.40 [#/sec] (mean)
Time per request:       1265.185 [ms] (mean)
Time per request:       1.265 [ms] (mean, across all concurrent requests)
Transfer rate:          9492.50 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.2      0      17
Processing:    30 1261 126.7   1240    2034
Waiting:        5 1252 126.2   1231    2026
Total:         30 1261 126.3   1240    2034

Percentage of the requests served within a certain time (ms)
  50%   1240
  66%   1257
  75%   1271
  80%   1282
  90%   1320
  95%   1354
  98%   1738
  99%   1955
 100%   2034 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1000&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   132.794 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1230293328 bytes
HTML transferred:       1209093328 bytes
Requests per second:    753.05 [#/sec] (mean)
Time per request:       1327.940 [ms] (mean)
Time per request:       1.328 [ms] (mean, across all concurrent requests)
Transfer rate:          9047.53 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.0      0      13
Processing:    24 1323 126.4   1296    2020
Waiting:        5 1314 125.9   1286    2010
Total:         24 1323 126.0   1296    2020

Percentage of the requests served within a certain time (ms)
  50%   1296
  66%   1318
  75%   1333
  80%   1348
  90%   1454
  95%   1574
  98%   1738
  99%   1754
 100%   2020 (longest request)
```

## 2. pm2 execution mode: cluster with max instance(saw 16 proces on pm2 monit)

### ROW Count =  1220001  
  
```
  1. JWT auth + redis block list
  2. Single record from DB at a time on 2nd benchmark  
  3. 20 record from starting
  4. 20 record from some where before end
```

```
SQL_USER=818XX@91177.com
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/login_status/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   11.331 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      32400000 bytes
HTML transferred:       11600000 bytes
Requests per second:    8825.13 [#/sec] (mean)
Time per request:       113.313 [ms] (mean)
Time per request:       0.113 [ms] (mean, across all concurrent requests)
Transfer rate:          2792.33 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.7      0      18
Processing:    15  112  12.7    112     198
Waiting:        3  111  12.5    111     197
Total:         20  113  12.1    112     198

Percentage of the requests served within a certain time (ms)
  50%    112
  66%    116
  75%    120
  80%    122
  90%    128
  95%    133
  98%    140
  99%    145
 100%    198 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   21.636 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      84600000 bytes
HTML transferred:       63700000 bytes
Requests per second:    4621.93 [#/sec] (mean)
Time per request:       216.360 [ms] (mean)
Time per request:       0.216 [ms] (mean, across all concurrent requests)
Transfer rate:          3818.51 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.8      0      19
Processing:    31  215  19.7    214     306
Waiting:       11  213  19.3    212     299
Total:         31  215  19.0    214     306

Percentage of the requests served within a certain time (ms)
  50%    214
  66%    221
  75%    227
  80%    230
  90%    239
  95%    247
  98%    255
  99%    261
 100%    306 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   23.530 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1229800000 bytes
HTML transferred:       1208600000 bytes
Requests per second:    4249.96 [#/sec] (mean)
Time per request:       235.297 [ms] (mean)
Time per request:       0.235 [ms] (mean, across all concurrent requests)
Transfer rate:          51040.97 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.6      0      16
Processing:    16  234  22.6    234     345
Waiting:        3  231  22.1    231     336
Total:         32  234  21.8    234     345

Percentage of the requests served within a certain time (ms)
  50%    234
  66%    241
  75%    246
  80%    249
  90%    258
  95%    267
  98%    277
  99%    285
 100%    345 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1000&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   31.969 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1230296054 bytes
HTML transferred:       1209096054 bytes
Requests per second:    3128.00 [#/sec] (mean)
Time per request:       319.693 [ms] (mean)
Time per request:       0.320 [ms] (mean, across all concurrent requests)
Transfer rate:          37581.67 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.7      0      19
Processing:    25  318  27.6    317     487
Waiting:        6  314  27.0    314     485
Total:         39  318  26.7    317     487

Percentage of the requests served within a certain time (ms)
  50%    317
  66%    325
  75%    332
  80%    336
  90%    349
  95%    359
  98%    370
  99%    378
 100%    487 (longest request)
```


## 2. pm2 execution mode: cluster with max instance(saw 16 proces on pm2 monit)

### ROW Count =  1220001  
  
```
  1. JWT auth + redis block list
  2. Single record from DB at a time on 2nd benchmark  
  3. 1k record from starting
  4. 1k record from some where before end
```

```
SQL_USER=818XX@91177.com
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/login_status/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   11.695 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      32400000 bytes
HTML transferred:       11600000 bytes
Requests per second:    8550.77 [#/sec] (mean)
Time per request:       116.949 [ms] (mean)
Time per request:       0.117 [ms] (mean, across all concurrent requests)
Transfer rate:          2705.52 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.8      0      20
Processing:    14  116  18.0    112     207
Waiting:        2  115  17.5    111     206
Total:         23  116  17.6    112     208

Percentage of the requests served within a certain time (ms)
  50%    112
  66%    121
  75%    126
  80%    130
  90%    141
  95%    150
  98%    160
  99%    171
 100%    208 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   17.980 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      84600000 bytes
HTML transferred:       63700000 bytes
Requests per second:    5561.73 [#/sec] (mean)
Time per request:       179.800 [ms] (mean)
Time per request:       0.180 [ms] (mean, across all concurrent requests)
Transfer rate:          4594.94 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.5      0      22
Processing:    24  179  21.0    175     323
Waiting:       10  176  20.7    172     318
Total:         24  179  20.8    175     323

Percentage of the requests served within a certain time (ms)
  50%    175
  66%    184
  75%    191
  80%    196
  90%    207
  95%    218
  98%    230
  99%    237
 100%    323 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1&limit=1000
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   260.076 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      60135994834 bytes
HTML transferred:       60114594834 bytes
Requests per second:    384.50 [#/sec] (mean)
Time per request:       2600.758 [ms] (mean)
Time per request:       2.601 [ms] (mean, across all concurrent requests)
Transfer rate:          225805.54 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.6      0      17
Processing:    49 2588 160.1   2594    3806
Waiting:       17 2549 159.9   2555    3607
Total:         49 2588 159.1   2594    3806

Percentage of the requests served within a certain time (ms)
  50%   2594
  66%   2633
  75%   2658
  80%   2674
  90%   2717
  95%   2751
  98%   2792
  99%   2822
 100%   3806 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1000&limit=1000
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   732.944 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      60137292681 bytes
HTML transferred:       60115892681 bytes
Requests per second:    136.44 [#/sec] (mean)
Time per request:       7329.438 [ms] (mean)
Time per request:       7.329 [ms] (mean, across all concurrent requests)
Transfer rate:          80125.96 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.5      0      16
Processing:   104 7296 1747.6   6807   18707
Waiting:       75 6928 1625.0   6484   18152
Total:        104 7296 1747.3   6807   18707

Percentage of the requests served within a certain time (ms)
  50%   6807
  66%   7234
  75%   7636
  80%   7978
  90%   9350
  95%  10934
  98%  13028
  99%  14266
 100%  18707 (longest request)
```

  




## 3. pm2 execution mode: cluster with max instance(saw 16 proces on pm2 monit)

  ### ROW Count =  1220001  

```
  Change in System spec:
  Disk: SSD
```


```
  1. JWT auth + redis block list
  2. Single record from DB at a time on 2nd benchmark  
  3. 20 record from starting
  4. 20 record from some where before end
```

```
SQL_USER=D9MOK@GOLZK.com
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/login_status/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   10.094 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      32400000 bytes
HTML transferred:       11600000 bytes
Requests per second:    9906.89 [#/sec] (mean)
Time per request:       100.940 [ms] (mean)
Time per request:       0.101 [ms] (mean, across all concurrent requests)
Transfer rate:          3134.60 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.9      0      19
Processing:    19  100  10.6    100     178
Waiting:        1   99  10.5     99     178
Total:         20  100   9.6    100     178

Percentage of the requests served within a certain time (ms)
  50%    100
  66%    103
  75%    106
  80%    107
  90%    112
  95%    116
  98%    122
  99%    125
 100%    178 (longest request)
```
```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   16.146 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      84600000 bytes
HTML transferred:       63700000 bytes
Requests per second:    6193.52 [#/sec] (mean)
Time per request:       161.459 [ms] (mean)
Time per request:       0.161 [ms] (mean, across all concurrent requests)
Transfer rate:          5116.91 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.2      0      18
Processing:    21  160  20.5    158     386
Waiting:       14  158  20.1    156     381
Total:         28  160  21.4    158     400

Percentage of the requests served within a certain time (ms)
  50%    158
  66%    163
  75%    167
  80%    170
  90%    177
  95%    184
  98%    194
  99%    225
 100%    400 (longest request)
```
```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   19.402 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1229800000 bytes
HTML transferred:       1208600000 bytes
Requests per second:    5154.05 [#/sec] (mean)
Time per request:       194.022 [ms] (mean)
Time per request:       0.194 [ms] (mean, across all concurrent requests)
Transfer rate:          61898.97 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.6      0      18
Processing:    15  193  16.6    192     288
Waiting:        3  190  16.1    190     284
Total:         32  193  15.7    192     289

Percentage of the requests served within a certain time (ms)
  50%    192
  66%    197
  75%    201
  80%    203
  90%    210
  95%    216
  98%    226
  99%    234
 100%    289 (longest request)
```
```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8080

Document Path:          /api/user?page=1000&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   27.668 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1230397614 bytes
HTML transferred:       1209197614 bytes
Requests per second:    3614.33 [#/sec] (mean)
Time per request:       276.676 [ms] (mean)
Time per request:       0.277 [ms] (mean, across all concurrent requests)
Transfer rate:          43428.40 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.5      0      19
Processing:    12  275  61.1    268     895
Waiting:        4  271  60.5    265     888
Total:         31  275  60.8    268     895

Percentage of the requests served within a certain time (ms)
  50%    268
  66%    275
  75%    280
  80%    283
  90%    293
  95%    303
  98%    319
  99%    820
 100%    895 (longest request)
```



## 4. pm2 execution mode: cluster with max instance(saw 16 process on pm2 monit)  [Will be used in comparison]

### ROW Count =  1220001  
```
Change in Pagination Logic:
1. added order by id for pagination
```


```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8000

Document Path:          /api/login_status/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   10.573 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      31100000 bytes
HTML transferred:       10300000 bytes
Requests per second:    9458.25 [#/sec] (mean)
Time per request:       105.728 [ms] (mean)
Time per request:       0.106 [ms] (mean, across all concurrent requests)
Transfer rate:          2872.57 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.6      0      17
Processing:    17  105  12.6    104     170
Waiting:        2  104  12.4    103     167
Total:         17  105  12.1    104     170

Percentage of the requests served within a certain time (ms)
  50%    104
  66%    109
  75%    113
  80%    115
  90%    121
  95%    126
  98%    132
  99%    136
 100%    170 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8000

Document Path:          /api/user/
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   17.653 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      43600000 bytes
HTML transferred:       22800000 bytes
Requests per second:    5664.84 [#/sec] (mean)
Time per request:       176.527 [ms] (mean)
Time per request:       0.177 [ms] (mean, across all concurrent requests)
Transfer rate:          2411.98 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.4      0      15
Processing:    40  175  20.4    171     399
Waiting:       25  173  19.9    169     388
Total:         40  175  21.3    172     414

Percentage of the requests served within a certain time (ms)
  50%    172
  66%    179
  75%    184
  80%    188
  90%    198
  95%    206
  98%    216
  99%    235
 100%    414 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8000

Document Path:          /api/user?page=1&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   20.147 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1220900000 bytes
HTML transferred:       1199700000 bytes
Requests per second:    4963.57 [#/sec] (mean)
Time per request:       201.468 [ms] (mean)
Time per request:       0.201 [ms] (mean, across all concurrent requests)
Transfer rate:          59179.87 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.5      0      17
Processing:    15  200  17.7    199     293
Waiting:        4  197  17.1    196     290
Total:         32  200  16.9    199     293

Percentage of the requests served within a certain time (ms)
  50%    199
  66%    204
  75%    208
  80%    211
  90%    220
  95%    228
  98%    236
  99%    242
 100%    293 (longest request)
 ```
 ```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 10000 requests
Completed 20000 requests
Completed 30000 requests
Completed 40000 requests
Completed 50000 requests
Completed 60000 requests
Completed 70000 requests
Completed 80000 requests
Completed 90000 requests
Completed 100000 requests
Finished 100000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            8000

Document Path:          /api/user?page=1000&limit=20
Document Length:        Variable

Concurrency Level:      1000
Time taken for tests:   51.109 seconds
Complete requests:      100000
Failed requests:        0
Total transferred:      1228100000 bytes
HTML transferred:       1206900000 bytes
Requests per second:    1956.60 [#/sec] (mean)
Time per request:       511.090 [ms] (mean)
Time per request:       0.511 [ms] (mean, across all concurrent requests)
Transfer rate:          23465.83 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   1.4      0      16
Processing:    14  508  39.8    506     714
Waiting:        8  502  37.7    501     688
Total:         30  508  39.0    506     714

Percentage of the requests served within a certain time (ms)
  50%    506
  66%    518
  75%    526
  80%    531
  90%    548
  95%    563
  98%    583
  99%    598
 100%    714 (longest request)
```