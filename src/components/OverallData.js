import React from 'react';

const OverallData = ({tableData}) => {
    return(
        <div className='overall-data'>
            <div className='total-cases'>
                <h1>Coronavirus Cases:</h1>
                <span className='total-cases-number'>
                    {tableData.totalCases}
                </span>
            </div>
            <div className='total-deaths'>
                <h1>Deaths:</h1>
                <span className='total-deaths-number'>
                    {tableData.totalDeaths}
                </span>
            </div>
            <div className='total-recovered'>
                <h1>Recovered:</h1>
                <span className='total-recovered-number'>
                    {tableData.totalRecovered}
                </span>
            </div>
        </div>
    )
}

export default OverallData;