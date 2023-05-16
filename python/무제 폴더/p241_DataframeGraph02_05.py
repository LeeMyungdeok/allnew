import pandas as pd
import matplotlib.pyplot as plt
plt.rcParams['font.family'] = 'AppleGothic'
filename = 'data/tips.csv'

myframe = pd.read_csv(filename, encoding='utf-8')
print('head() 메소드 결과')
print(myframe.head())
print('-' * 40)

print('info() 메소드 결과')
print(myframe.info())
print('-' * 40)

mycolors = ['r','b']
labels = ['Female', 'Male']
print(labels)

