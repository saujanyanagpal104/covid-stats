import React from 'react';

const ActiveCasesBlock = ({tableData}) => {

    const {totalActiveCases} = tableData;
    const mildPercentage = (parseInt(totalActiveCases.mild)/parseInt(totalActiveCases.total)) * 100;
    const criticalPercentage = (parseInt(totalActiveCases.critical)/parseInt(totalActiveCases.total)) * 100;

    return(
            <div className='active-cases'>
                <div className='active-cases-heading-container'>
                    <span className='active-cases-heading'>ACTIVE CASES</span>
                </div>
                <div className='active-cases-block'>
                    <div className='active-cases-data'>
                        <span className='active-cases-number'>
                            {totalActiveCases.total}
                        </span>
                        <span className='active-cases-text'>
                            Currently Infected Patients
                        </span>
                    </div>
                    <div className='active-cases-condition'>
                        <div className='mild-condition'>
                            <div className='mild-condition-number'>
                                <span>{totalActiveCases.mild}</span>
                                <span className='percentage'>
                                    ({mildPercentage.toFixed(2)}%)
                                </span>
                            </div>
                            <span className='mild-condition-text'>
                                in Mild Condition
                            </span>
                        </div>
                        <div className='critical-condition'>
                            <div className='critical-condition-number'>
                                <span>{totalActiveCases.critical}</span>
                                <span className='percentage'>
                                    ({criticalPercentage.toFixed(2)}%)
                                </span>
                            </div>
                            <span className='critical-condition-text'>
                                Serious or Critical
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ActiveCasesBlock;