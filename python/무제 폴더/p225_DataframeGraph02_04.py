import pandas as pd
import matplotlib.pyplot as plt

plt.rcParams['font.family'] = 'AppleGothic'

filename = 'data/mygraph.csv'

myframe = pd.read_csv(filename, index_col='이름', encoding='utf-8')
myframe.index.name = '이름'
myframe.columns.name = '성적'

myframe.plot(kind='bar', rot=0, title='학생별 누적 시험 점수', legend=True)

print(myframe)
print('-' * 40)

filename = 'data/seriesGraph01.png'
plt.savefig(filename, dpi=400, bbox_inches='tight')
print(filename + ' Saved...')

print(myframe)
print('-' * 40)

myframe.plot(kind='bar', rot=0, title='학생별 누적 시험 점수', legend=True)
filename = 'data/seriesGraph01.png'
plt.savefig(filename, dpi=400, bbox_inches='tight')
print(filename + ' Saved…')
print('-' * 40)

ymax = myframe.sum(axis=1)
ymaxlimit = ymax.max() + 10

myframe.plot(kind='bar', ylim=[0, ymaxlimit], rot=0, stacked=True, title='학생별 누적 시험 점수', legend=True)
filename = 'data/seriesGraph01.png'
plt.savefig(filename, dpi=400, bbox_inches='tight')
print(filename + ' Saved…')
plt.show()