import React, {useState} from 'react';
import DataTable from './DataTable';

const Tables = ({tableData}) => {
    const [table, changeTable] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleClick = () => {
        setSearchValue('');
        setFilteredData([]);
        changeTable(!table);
    }

    const searchCountry = (input) => {
        let data = table ? tableData.todayData : tableData.yesterdayData;
        let filteredData = data.filter((val) => val.country.toLowerCase().search(input.toLowerCase()) !== -1);
        (input) ? setFilteredData(filteredData) : setFilteredData([])
    }

    const handleChange = (e) => {
        searchCountry(e.target.value);
        setSearchValue(e.target.value);
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
                    <DataTable tableData={filteredData.length > 0 ? filteredData : table ? tableData.todayData : tableData.yesterdayData} /> 
                </div>
        </div>
    )
}

export default Tables;