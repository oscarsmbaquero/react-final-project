import React from 'react';

import DataTable from 'react-data-table-component';

const ShowCandidatures = ({contacts}) => {

    const columns = [
  
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Surname',
            selector: row => row.surname,
        },
    ];
    const customStyles = {
      rows: {
          style: {
              minHeight: '60px', // override the row height
          },
      },
      headCells: {
          style: {
              paddingLeft: '300px', // override the cell padding for head cells
              paddingRight: '8px',
          },
      },
      cells: {
          style: {
              paddingLeft: '300px', // override the cell padding for data cells
              paddingRight: '8px',
          },
      },
    };
  return (
    <DataTable
            
            columns={columns}
            data={contacts}
            pagination
            customStyles={customStyles}
        />
  )
}

export default ShowCandidatures