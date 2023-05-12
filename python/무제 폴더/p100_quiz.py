myfile01 = open('sample02.txt', 'rt', encoding='UTF-8')
linelists = myfile01.readlines()
myfile01.close()

myfile2 = open('result02.txt', 'wt', encoding='UTF-8')


for linelist in  linelists:
    mylist = linelist.split(" ")
    if int(mylist[1]) > 19:
        adult = '성인'
    else:
        adult = "미성년"

    text = mylist[0] + "/" + mylist[1] + "/" + adult
    myfile2.write(text + '\n')
myfile2.close()