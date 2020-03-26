import React, { Component } from 'react';


const TodayTable = (props) => (
    <div className='table-container'>
        <table>
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
                {props.tableData.todayData.map((row, index) => {
                    return (
                        <tr key={index}>
                            <td>{row.country}</td>
                            <td>{row.total_cases}</td>
                            <td>{row.new_cases}</td>
                            <td>{row.total_deaths}</td>
                            <td>{row.new_deaths}</td>
                            <td>{row.active_cases}</td>
                            <td>{row.critical_cases}</td>
                            <td>{row.recovered_cases}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
)

export default TodayTable;