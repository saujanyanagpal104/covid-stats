import React from 'react';


const DataTable = (props) => (
    <div className='table-container'>
        <table className='data-table'>
            <thead>
                <tr>
                    <th>
                        Country
                    </th>
                    <th>
                        Total Cases
                    </th>
                    <th>
                        New Cases
                    </th>
                    <th>
                        Total Deaths
                    </th>
                    <th>
                        New Deaths
                    </th>
                    <th>
                        Active Cases
                    </th>
                    <th>
                        Critical Cases
                    </th>
                    <th>
                        Recovered Cases
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.tableData.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td className='bold'>{row.country}</td>
                            <td>{row.total_cases}</td>
                            <td className='red'>{row.new_cases}</td>
                            <td>{row.total_deaths}</td>
                            <td className='red'>{row.new_deaths}</td>
                            <td>{row.active_cases}</td>
                            <td>{row.critical_cases}</td>
                            <td className='green'>{row.recovered_cases}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)

export default DataTable;