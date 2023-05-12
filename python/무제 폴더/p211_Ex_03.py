import numpy as np
import pandas as pd

df = pd.read_csv("data/과일매출현황.csv" , index_col="과일명")
df.loc[df.index == "바나나", "구입액"] = 50.00
df.fillna(20.00, inplace=True)
print('-' * 40)
print(df.sum())
print('-' * 40)
print(df.sum(axis=1))
print('-' * 40)
print(df.mean())
print('-' * 40)
print(df.mean(axis=1))

# df = pd.DataFrame()