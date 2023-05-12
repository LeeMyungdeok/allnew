from itertools import count
from p340_ChickenUtill import ChickenStore
import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.detach(), encoding='utf-8')

brandName = 'pelicana'
base_url = 'https://pelicana.co.kr/store/stroe_search.html'


def getData():
    saveData = []

    for page_idx in count():
        url = base_url + '?page=' + str(page_idx + 1)
        chknStore = ChickenStore(brandName, url)
        soup = chknStore.getSoup()
        mytable = soup.find('table', attrs={'class': "table mt20"})
        mytbody = mytable.find('tbody')
        print(mytbody)
        shopExists = False
        for mytr in mytbody.findAll('tr'):
            shopExists = True
            mylist = list(mytr.strings)
            for ecode in mylist:
                mylist_ecide = ecode.encode('utf-8')
                print(mylist_ecide)



print(brandName + '매장 크롤링 시작')
getData()
print(brandName + '매장 크롤링 시작')