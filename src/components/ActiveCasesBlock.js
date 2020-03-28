import React from 'react';

const ActiveCasesBlock = ({tableData}) => {

    const {totalActiveCases} = tableData;

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
                            <span className='mild-condition-number'>
                                {totalActiveCases.mild}
                            </span>
                            <span className='mild-condition-text'>
                                in Mild Condition
                            </span>
                        </div>
                        <div className='critical-condition'>
                            <span className='critical-condition-number'>
                                {totalActiveCases.critical}
                            </span>
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