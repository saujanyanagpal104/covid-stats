import React from 'react';
import ClosedCasesBlock from './ClosedCasesBlock';
import ActiveCasesBlock from './ActiveCasesBlock';

const DataBlocks = ({tableData}) => (
    <div className='data-blocks'>
        <ActiveCasesBlock tableData={tableData} />
        <ClosedCasesBlock tableData={tableData} />
    </div>
)

export default DataBlocks;