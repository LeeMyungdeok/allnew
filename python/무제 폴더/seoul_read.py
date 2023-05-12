import pandas as pd

df = pd.read_csv("data/seoul.csv")

result = df[(df["시군구"] == " 서울특별시 강남구 신사동") & (df["단지명"] == "삼지")]
print(result)

newdf = df.set_index(keys=['도로명'])
print(newdf)

result = newdf[newdf.index == "동일로"]
print(result)
print(result.count())
print(result.info())
print(result["단지명"].unique)