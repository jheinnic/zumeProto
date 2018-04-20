************************************************************************
file with basedata            : md370_.bas
initial value random generator: 321115047
************************************************************************
projects                      :  1
jobs (incl. supersource/sink ):  22
horizon                       :  156
RESOURCES
  - renewable                 :  2   R
  - nonrenewable              :  2   N
  - doubly constrained        :  0   D
************************************************************************
PROJECT INFORMATION:
pronr.  #jobs rel.date duedate tardcost  MPM-Time
    1     20      0       24       11       24
************************************************************************
PRECEDENCE RELATIONS:
jobnr.    #modes  #successors   successors
   1        1          3           2   3   4
   2        3          3           5  10  14
   3        3          2           6  12
   4        3          3           6   7  11
   5        3          1           9
   6        3          1          20
   7        3          2           8  13
   8        3          3          15  18  19
   9        3          2          12  19
  10        3          3          13  16  18
  11        3          1          12
  12        3          3          13  15  18
  13        3          2          17  20
  14        3          2          16  17
  15        3          1          17
  16        3          3          19  20  21
  17        3          1          21
  18        3          1          21
  19        3          1          22
  20        3          1          22
  21        3          1          22
  22        1          0        
************************************************************************
REQUESTS/DURATIONS:
jobnr. mode duration  R 1  R 2  N 1  N 2
------------------------------------------------------------------------
  1      1     0       0    0    0    0
  2      1     3       0    4    9    2
         2     3       2    0   10    2
         3     5       2    0    6    2
  3      1     2       7    0    9    8
         2     8       0    4    4    7
         3     9       4    0    2    6
  4      1     1       0    6    3    5
         2     5       2    0    3    5
         3     5       0    6    3    4
  5      1     3       0    7    8    6
         2     4       0    7    8    5
         3     9       0    6    7    3
  6      1     2       0   10    7    7
         2     8      10    0    5    5
         3     9       0    9    2    3
  7      1     1       0    7    8    6
         2     4       4    0    5    6
         3     7       0    7    3    4
  8      1     4       0    6    9    2
         2     4       7    0    9    2
         3     6       0    5    9    1
  9      1     5       2    0    4    8
         2     8       0    9    4    5
         3    10       1    0    4    1
 10      1     4       0    1    7    7
         2     4       2    0    8    6
         3     5       2    0    3    3
 11      1     4       7    0    8    4
         2     8       0    5    8    4
         3     8       3    0    7    4
 12      1     1       0    7    5    3
         2     2       2    0    3    2
         3     8       0    4    2    2
 13      1     2       4    0    3    6
         2     5       1    0    3    5
         3    10       0    5    2    3
 14      1     4       7    0   10    5
         2     5       0    5    8    5
         3     7       0    3    6    5
 15      1     1       0    5    3    4
         2     3       0    4    3    2
         3     9       0    4    2    2
 16      1     2       0    5    4    7
         2     5       0    5    3    7
         3     9       0    4    2    4
 17      1     7       2    0    4   10
         2     8       0    8    4    8
         3     9       0    3    3    6
 18      1     4       6    0    6    7
         2     9       0    8    4    6
         3    10       2    0    2    4
 19      1     1       0    5    9    4
         2     8       3    0    7    3
         3    10       3    0    3    2
 20      1     3       9    0    6    5
         2     3       0    5    6    5
         3     5       9    0    2    1
 21      1     3       0    9    9    5
         2     4       6    0    8    4
         3     6       5    0    8    3
 22      1     0       0    0    0    0
************************************************************************
RESOURCEAVAILABILITIES:
  R 1  R 2  N 1  N 2
   16   18  119   99
************************************************************************
