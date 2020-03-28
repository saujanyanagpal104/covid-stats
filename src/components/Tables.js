import React, {useState} from 'react';
import DataTable from './DataTable';

const Tables = ({tableData}) => {
    const [table, changeTable] = useState(true);
    const [searchValue, setSearchValue] = useState();

    const handleClick = () => {
        changeTable(!table);
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    
    return (
        <div className='switch-table-container'>
            <h1>Global Cases</h1>
                <div className='switch-and-search'>
                    <div className='table-switch'>
                        <span onClick={handleClick} className={`${table ? 'active' : ''} today-button`}>Now</span>
                        <span onClick={handleClick} className={`${table ? '' : 'active'} yesterday-button`}>Yesterday</span>
                    </div>
                    <div className='search-box'>
                        <input type='text' value={searchValue} placeholder='Search Country' onChange={handleChange} />
                    </div>
                </div>
                <div className='tables'>
                    <DataTable tableData={table ? tableData.todayData : tableData.yesterdayData} /> 
                </div>
        </div>
    )
}

export default Tables;