import requests
from bs4 import BeautifulSoup 
URL = 'https://www.worldometers.info/coronavirus/'
r = requests.get(URL)
soup = BeautifulSoup(r.content, 'html5lib')

tableClass = soup.find('div', {'id': 'nav-tabContent'})

todayTable = tableClass.find('div', {'id': 'nav-today'})
yesterdayTable = tableClass.find('div', {'id': 'nav-yesterday'})

# newTodayTable = todayTable.find('div', {'class':'main_table_countries_div'})

# print(tableClass)
# print(todayTable.div.table)
# print(yesterdayTable)

htmlFile = open('../test123.html', 'w')
htmlFile.write(str(todayTable.div.table))
htmlFile.close()