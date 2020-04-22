import React from 'react';

const IndianDistricts = ({district}) => {
    return (
        <div className='indian-districts'>
            <table className='data-table'>
                <tbody>
                    <tr>
                        <th>
                            District
                        </th>
                        <th>
                            Active
                        </th>
                        <th>
                            Confirmed
                        </th>
                        <th>
                            Deaths
                        </th>
                        <th>
                            Recovered
                        </th>
                    </tr>
                    {
                        district.map((dist, index) => (
                            <tr key={index}>
                                <td>{dist.district && <span>{dist.district}</span>}</td>
                                <td>{dist.active && <span>{dist.active}</span>}</td>
                                <td>{dist.confirmed && <span>{dist.confirmed}</span>}</td>
                                <td>{dist.deceased && <span>{dist.deceased}</span>}</td>
                                <td>{dist.recovered && <span>{dist.recovered}</span>}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
};

export default IndianDistricts;