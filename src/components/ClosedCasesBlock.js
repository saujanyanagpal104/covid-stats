import React from 'react';

const ClosedCasesBlock = ({tableData}) => {

    const {totalClosedCases} = tableData;

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
                            <span className='recovered-condition-number'>
                                {totalClosedCases.recovered}
                            </span>
                            <span className='recovered-condition-text'>
                                Recovered / Discharged
                            </span>
                        </div>
                        <div className='deaths'>
                            <span className='deaths-number'>
                                {totalClosedCases.deaths}
                            </span>
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