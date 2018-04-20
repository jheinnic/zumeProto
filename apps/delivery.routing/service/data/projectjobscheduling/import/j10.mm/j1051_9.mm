************************************************************************
file with basedata            : mm51_.bas
initial value random generator: 1235887528
************************************************************************
projects                      :  1
jobs (incl. supersource/sink ):  12
horizon                       :  73
RESOURCES
  - renewable                 :  2   R
  - nonrenewable              :  2   N
  - doubly constrained        :  0   D
************************************************************************
PROJECT INFORMATION:
pronr.  #jobs rel.date duedate tardcost  MPM-Time
    1     10      0       19        7       19
************************************************************************
PRECEDENCE RELATIONS:
jobnr.    #modes  #successors   successors
   1        1          3           2   3   4
   2        3          3           8   9  11
   3        3          3           6   7  11
   4        3          2           5  10
   5        3          1           7
   6        3          1          10
   7        3          1           9
   8        3          1          10
   9        3          1          12
  10        3          1          12
  11        3          1          12
  12        1          0        
************************************************************************
REQUESTS/DURATIONS:
jobnr. mode duration  R 1  R 2  N 1  N 2
------------------------------------------------------------------------
  1      1     0       0    0    0    0
  2      1     7       7    9    0    7
         2     8       4    7    8    0
         3     8       2    6    0    7
  3      1     1       8    5    9    0
         2     3       6    5    6    0
         3     5       6    2    5    0
  4      1     3      10    8    0    6
         2     4       9    7    6    0
         3     6       8    4    4    0
  5      1     7       4    7    0    9
         2     8       4    6    9    0
         3    10       3    6    0    6
  6      1     4       8    5    7    0
         2     5       8    4    0    6
         3     6       8    4    0    3
  7      1     5       8    9    7    0
         2     8       7    8    0    4
         3     9       5    8    0    3
  8      1     2       5    4    4    0
         2     6       2    4    4    0
         3     6       4    2    4    0
  9      1     4       6    9    0    5
         2     7       4    8    0    4
         3     8       3    8   10    0
 10      1     4       5    7    0    8
         2     7       5    7    0    7
         3     7       5    7    9    0
 11      1     2       6    6    6    0
         2     7       5    6    0    6
         3     8       4    4    6    0
 12      1     0       0    0    0    0
************************************************************************
RESOURCEAVAILABILITIES:
  R 1  R 2  N 1  N 2
   20   18   55   36
************************************************************************
