import React from 'react';

const ClosedCasesBlock = ({tableData}) => {

    const {totalClosedCases} = tableData;
    const recoveredPercentage = (parseInt(totalClosedCases.recovered)/parseInt(totalClosedCases.total)) * 100;
    const deathsPercentage = (parseInt(totalClosedCases.deaths)/parseInt(totalClosedCases.total)) * 100;

    return(
            <div className='closed-cases'>
                <div className='closed-cases-heading-container'>
                    <span className='closed-cases-heading'>CLOSED CASES</span>
                </div>
                <div className='closed-cases-block'>
                    <div className='closed-cases-data'>
                        <span className='closed-cases-number'>
                            {totalClosedCases.total}
                        </span>
                        <span className='closed-cases-text'>
                            Cases which had an outcome
                        </span>
                    </div>
                    <div className='closed-cases-condition'>
                        <div className='recovered-condition'>
                            <div className='recovered-condition-number'>
                                <span>{totalClosedCases.recovered}</span>
                                <span className='percentage'>
                                    ({recoveredPercentage.toFixed(2)}%)
                                </span>
                            </div>
                            <span className='recovered-condition-text'>
                                Recovered / Discharged
                            </span>
                        </div>
                        <div className='deaths'>
                            <div className='deaths-number'>
                                <span>{totalClosedCases.deaths}</span>
                                <span className='percentage'>
                                    ({deathsPercentage.toFixed(2)}%)
                                </span>
                            </div>
                            <span className='deaths-text'>
                                Deaths
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ClosedCasesBlock;