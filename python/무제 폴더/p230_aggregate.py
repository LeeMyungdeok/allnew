import numpy as np
from pandas import DataFrame

mydata = [[10.0, np.nan, 20.0], [20.0, 30.0, 40.0], [np.nan, np.nan, np.nan], [40.0, 50.0, 30.0]]
myindex = ['이순신', '김유신', '윤봉길', '계백']
mycolumns = ['국어', '영어', '수학']

myframe = DataFrame(data=mydata, index=myindex, columns=mycolumns)
# print('\n 성적 데이터 프레임 출력')
# print(myframe)
#
# print('\n # 집계함수는 기본적으로 Nan은 제외하고 연산')
# print('\n # sum(), axis = 0, 열방향')
# print(myframe.sum(axis=0))
#
# print('\n # sum(), axis = 1, 행방향')
# print(myframe.sum(axis=1))
#
# print('\n # mean(), axis = 1, skipna=False')
# print(myframe.mean(axis=1, skipna=False))
# print('-' * 40)
#
# print('\n # mean(), axis = 1, skipna=True')
# print(myframe.mean(axis=1, skipna=True))
# print('-' * 40)
print('-' * 40)
print(myframe[myframe['국어'].isnull()].loc[:,'국어'])
print('-' * 40)
myframe[myframe['국어'].isnull()].loc[:,'국어'] = np.round(myframe['국어'].mean(), 1)
print(myframe)
print('-' * 40)
print(myframe[myframe['국어'].isnull()].loc[:,'국어'])
print('-' * 40)
myframe.loc[myframe['국어'].isnull() , '국어'] = np.round(myframe['국어'].mean(), 1)
print(myframe)