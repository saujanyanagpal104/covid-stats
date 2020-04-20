import React from 'react';
import ArrowSvg from '../assets/Arrow';

const IndianCitiesData = ({stateWise, stateDistrictWise}) => {
    return(
        <div className='indian-cities-data'>
            <div className='indian-cities-heading'>
                <h1>Indian Cities Stats:</h1>
            </div>
            <table className='cities-table data-table'>
                <tbody>
                    <tr>
                        <th className='states-col'>State</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                        <th>Last Updated</th>
                    </tr>
                    {stateWise.map((state) => (
                        <tr key={state.state}>
                            <td className='bold cities-table-row states-col'><span>{state.state}</span></td>
                            <td className="cities-table-row">{state.deltaconfirmed > 0 && <span className='delta-red'>{<ArrowSvg className={'arrow-svg-red'} />}{state.deltaconfirmed}</span>}<span>{state.confirmed}</span></td>
                            <td className="cities-table-row"><span>{state.active}</span></td>
                            <td className="cities-table-row">{state.deltarecovered > 0 && <span className='delta-green'>{<ArrowSvg className={'arrow-svg-green'} />}{state.deltarecovered}</span>}<span>{state.recovered}</span></td>
                            <td className="cities-table-row">{state.deltadeaths > 0 && <span className='delta-red'>{<ArrowSvg className={'arrow-svg-red'} />}{state.deltadeaths}</span>}<span>{state.deaths}</span></td>
                            <td className="cities-table-row"><span>{state.lastupdatedtime}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IndianCitiesData;