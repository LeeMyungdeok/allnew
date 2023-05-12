import numpy as np
import pandas as pd
from pandas import DataFrame, Series

print('\n# 시리즈의 누락 데이터 처리')
print('#원본 시리즈')
myseries = Series(['강감찬', '이순신', np.nan, '광해군'])
print(myseries)

print('\n# isnull() 함수 : NaN이면 True')
print(myseries.isnull())

print('\n# notnull() 함수 : NaN이 아니면 True')
print(myseries.notnull())
print("-" * 40)

print('\n# notnull() 이용하여 참인 항목만 출력')
print(myseries[myseries.notnull()])

print('\n# dropna() 이용 누락 데이터 처리')
print(myseries.dropna())

print('\n# how="all" : 이용 누락 데이터 처리')
print(myseries.dropna())

myframe = pd.read_csv("data/excel021.csv", index_col="이름", encoding='utf-8')
print(myframe)

cleaned = myframe.dropna(axis=0 , how='all')
print(cleaned)

# cleaned = myframe.dropna(axis=1)
# print(cleaned)

cleaned = myframe.dropna(axis=0 , subset=['영어'])
print(cleaned)


print(myframe)
myframe.loc[['강감찬', '홍길동'] , ['국어']] = np.nan
print(myframe)

print(myframe.dropna(axis=1 , how="all"))
print(myframe)
print(myframe.dropna(axis=1, thresh=0)) # 국어 영어 수학
print(myframe.dropna(axis=1, thresh=1)) # 영어 수학
print(myframe.dropna(axis=1, thresh=2)) # 영어 수학
print(myframe.dropna(axis=1, thresh=3)) # 안나옴
