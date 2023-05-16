from bs4 import BeautifulSoup
import requests


url = 'https://comic.naver.com/webtoon/weekday'
res = requests.get(url)
re = res.text
res.raise_for_status()   #문제가 있으면 프로그램 종료하겠다

soup = BeautifulSoup(re , "lxml")
cartoons = soup.find_all("a" , attrs = {"class" : "title"})
for cartoon in cartoons:
    titl = cartoon.get_text()
    print(titl)