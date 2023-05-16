import numpy as np
import pandas as pd
from pandas import DataFrame, Series

df = pd.read_csv("data/excel021.csv")

a_sum = sum(df["국어"][df['국어'].notna()])
a_len = len(df[df['국어'].notna() == True])
a_mean = a_sum / a_len

df[df['국어'].isna() == True].loc[ : , ["국어"]] = a_mean

b_sum = sum(df["수학"][df['수학'].notna()])
b_len = len(df[df['수학'].notna() == True])
b_mean = b_sum / b_len

df[df['수학'].isna() == True].loc[ : , ["수학"]] = b_mean

c_sum = sum(df['영어'][df['영어'].notna()])
c_len = len(df[df['영어'].notna() == True])
c_mean = c_sum / c_len

df[df['영어'].isna() == True].loc[ : , ["영어"]] = c_mean

print(df)
#
# for i in df.columns:
#     a_sum = sum(df[i][df[i].notna()])
#     a_len = len(df[df[i].notna() == True])
#     a_mean = a_sum / a_len
#
#     df[df[i].isna() == True].loc[:, [i]] = a_mean
