import pandas as pd
from bs4 import BeautifulSoup
import matplotlib.pyplot as plt
plt.rcParams['font.family'] = "AppleGothic"

html = open("ex5-10.html", "r", encoding="utf-8")
soup = BeautifulSoup(html, "html.parser")

result = []
tbody = soup.find("tbody")
tds = tbody.findAll('td')
for data in tds:
    result.append(data.text)
# print(result)

df = pd.DataFrame(columns=['이름', '국어', '영어'])
cnt = []
for i in result:
    cnt.append(i)
    if len(cnt) % 3 == 0:
        df = pd.concat([df, pd.DataFrame([cnt], columns=df.columns)], axis=0)
        cnt = []

df = df.set_index("이름")
df = df.astype(float)
print(df.info())

df.plot(kind='line', rot=0 ,title = '점수', figsize=(10,6))
plt.show()




