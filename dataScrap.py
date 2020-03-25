import requests
from bs4 import BeautifulSoup 
import json
URL = 'https://www.worldometers.info/coronavirus/'
r = requests.get(URL)
soup = BeautifulSoup(r.content, 'html5lib')

dataObject = {'todayData': [], 'yesterdayData': [], 'totalCases': '', 'totalDeaths': '', 'totalRecovered': '', 'totalActiveCases': {'total': '', 'mild': '', 'critical': ''}, 'totalClosedCases': {'total': '', 'recovered': '', 'deaths': ''}}

tableClass = soup.find('div', {'id': 'nav-tabContent'})

todayTable = tableClass.find('div', {'id': 'nav-today'})
yesterdayTable = tableClass.find('div', {'id': 'nav-yesterday'})
dataSum = soup.findAll('div', {'id': 'maincounter-wrap'})
totalCases = dataSum[0].div.span.text.strip()
totalDeaths = dataSum[1].div.span.text.strip()
totalRecovered = dataSum[2].div.span.text.strip()
activeData = soup.findAll('div', {'class': 'panel'})
activeCasesData = activeData[0].find('div', {'class': 'panel-body'}).div.div
closedCasesData = activeData[1].find('div', {'class': 'panel-body'}).div.div
totalActiveCases = activeCasesData.find('div', {'class': 'number-table-main'}).text
mildActiveCases = activeCasesData.find('div', {'class': 'number-table-main'}).findNextSiblings('div')[1].findAll('span', {'class': 'number-table'})[0].text.strip()
criticalActiveCases = activeCasesData.find('div', {'class': 'number-table-main'}).findNextSiblings('div')[1].findAll('span', {'class': 'number-table'})[1].text.strip()
totalClosedCases = closedCasesData.find('div', {'class': 'number-table-main'}).text.strip()
recoveredClosedCases = closedCasesData.find('div', {'class': 'number-table-main'}).findNextSiblings('div')[1].findAll('span', {'class': 'number-table'})[0].text.strip()
deathClosedCases = closedCasesData.find('div', {'class': 'number-table-main'}).findNextSiblings('div')[1].findAll('span', {'class': 'number-table'})[1].text.strip()

todayDataTable = todayTable.div.table.tbody
yesterdayDataTable = todayTable.div.table.tbody

def getCountry(data):
    if data.findAll('td')[0]:
        return data.findAll('td')[0].text.encode('utf-8').strip()
    elif data.findAll('td')[0].a:
        return data.findAll('td')[0].a.text.encode('utf-8').strip()
    elif data.findAll('td')[0].span:
        return data.findAll('td')[0].span.text.encode('utf-8').strip()
    else:
        return ''

for row  in todayDataTable.findAll('tr'):
    dataObj = {}
    dataObj['country'] = getCountry(row)
    dataObj['total_cases'] = row.findAll('td')[1].text.encode('utf-8').strip() if row.findAll('td')[1].text.encode('utf-8').strip() != None else ''
    dataObj['new_cases'] = row.findAll('td')[2].text.encode('utf-8').strip() if row.findAll('td')[2].text.encode('utf-8').strip() != None else ''
    dataObj['total_deaths'] = row.findAll('td')[3].text.encode('utf-8').strip() if row.findAll('td')[3].text.encode('utf-8').strip() != None else ''
    dataObj['new_deaths'] = row.findAll('td')[4].text.encode('utf-8').strip() if row.findAll('td')[4].text.encode('utf-8').strip() != None else ''
    dataObj['recovered_cases'] = row.findAll('td')[5].text.encode('utf-8').strip() if row.findAll('td')[5].text.encode('utf-8').strip() != None else ''
    dataObj['active_cases'] = row.findAll('td')[6].text.encode('utf-8').strip() if row.findAll('td')[6].text.encode('utf-8').strip() != None else ''
    dataObj['critical_cases'] = row.findAll('td')[7].text.encode('utf-8').strip() if row.findAll('td')[7].text.encode('utf-8').strip() != None else ''
    dataObj['total_cases_per_million'] = row.findAll('td')[8].text.encode('utf-8').strip() if row.findAll('td')[8].text.encode('utf-8').strip() != None else ''
    dataObj['total_deaths_per_million'] = row.findAll('td')[9].text.encode('utf-8').strip() if row.findAll('td')[9].text.encode('utf-8').strip() != None else ''
    dataObject['todayData'].append(dataObj)

for row  in yesterdayDataTable.findAll('tr'):
    dataObj = {}
    dataObj['country'] = getCountry(row)
    dataObj['total_cases'] = row.findAll('td')[1].text.encode('utf-8').strip() if row.findAll('td')[1].text.encode('utf-8').strip() != None else ''
    dataObj['new_cases'] = row.findAll('td')[2].text.encode('utf-8').strip() if row.findAll('td')[2].text.encode('utf-8').strip() != None else ''
    dataObj['total_deaths'] = row.findAll('td')[3].text.encode('utf-8').strip() if row.findAll('td')[3].text.encode('utf-8').strip() != None else ''
    dataObj['new_deaths'] = row.findAll('td')[4].text.encode('utf-8').strip() if row.findAll('td')[4].text.encode('utf-8').strip() != None else ''
    dataObj['recovered_cases'] = row.findAll('td')[5].text.encode('utf-8').strip() if row.findAll('td')[5].text.encode('utf-8').strip() != None else ''
    dataObj['active_cases'] = row.findAll('td')[6].text.encode('utf-8').strip() if row.findAll('td')[6].text.encode('utf-8').strip() != None else ''
    dataObj['critical_cases'] = row.findAll('td')[7].text.encode('utf-8').strip() if row.findAll('td')[7].text.encode('utf-8').strip() != None else ''
    dataObj['total_cases_per_million'] = row.findAll('td')[8].text.encode('utf-8').strip() if row.findAll('td')[8].text.encode('utf-8').strip() != None else ''
    dataObj['total_deaths_per_million'] = row.findAll('td')[9].text.encode('utf-8').strip() if row.findAll('td')[9].text.encode('utf-8').strip() != None else ''
    dataObject['yesterdayData'].append(dataObj)

dataObject['totalCases'] = totalCases
dataObject['totalDeaths'] = totalDeaths
dataObject['totalRecovered'] = totalRecovered
dataObject['totalActiveCases']['total'] = totalActiveCases
dataObject['totalActiveCases']['mild'] = mildActiveCases
dataObject['totalActiveCases']['critical'] = criticalActiveCases
dataObject['totalClosedCases']['deaths'] = deathClosedCases
dataObject['totalClosedCases']['total'] = totalClosedCases
dataObject['totalClosedCases']['recovered'] = recoveredClosedCases
dataFile = open('./src/data/content.json', 'w')
dataFile.write(json.dumps(dataObject))
dataFile.close()



print('totalCases' + ' ' + totalCases)
print('totalRecovered' + ' ' + totalRecovered)
print('totalDeaths' + ' ' + totalDeaths)
print('totalActiveCases' + ' ' + totalActiveCases)
print('mildActiveCases' + ' ' + mildActiveCases)
print('criticalActiveCases' + ' ' + criticalActiveCases)
print('totalClosedCases' + ' ' + totalClosedCases)
print('recoveredClosedCases' + ' ' + recoveredClosedCases)
print('deathClosedCases' + ' ' + deathClosedCases)