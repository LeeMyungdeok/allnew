import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = 'AppleGothic'

myframe = pd.read_csv("data/dataframeGraph.csv", encoding='euc-kr')

myframe = myframe.set_index(keys='name')
print(myframe)

myframe.plot(kind='bar', title = 'Sometitle', figsize = (10,6), legend=True)

filename= 'data/seriesGraph01.png'
plt.savefig(filename, dpi = 400, bbox_inches='tight')
print(filename + 'Saved....')
plt.show()