import React from 'react';

const TestingData = ({testingStats}) => {
    console.log(testingStats)
    return (
        <div className='testing-table'>
            <div className='testing-table-heading'>
                <h1>Testing Stats</h1>
            </div>
            <table className='data-table'>
                <tbody>
                    <tr>
                        <th>
                            Total Samples Tested
                        </th>
                        <th>
                            Total Positive Cases
                        </th>
                        <th>
                            Tests Conducted By Private Labs
                        </th>
                        <th>
                            Updated On
                        </th>
                    </tr>
                    {testingStats.map((stat, index) => (
                        <tr key={index}>
                            <td>{stat.totalSamplesTested}</td>
                            <td>{stat.totalPositiveCases}</td>
                            <td>{stat.testsConductedByPrivateLabs}</td>
                            <td>{stat.updateTimeStamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TestingData;