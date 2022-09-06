import React, { useState, useMemo }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import differenceBy from 'lodash/differenceBy';
import { Inertia } from '@inertiajs/inertia';

export default function Roles(props){
	console.log(props.role);
	const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const [selectedRows, setSelectedRows] = React.useState([]);
    const [toggleCleared, setToggleCleared] = React.useState(false);
    const [filteredData, setFilteredData] = React.useState([]);

    const columns = useMemo( () => [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Created At',
        selector: row => row.created_at,
        sortable: true,
    },
    {
        name: 'Updated At',
        selector: row => row.updated_at,
        sortable: true,
    },
    {     
      cell: (row) => <button className="px-2 py-1 bg-green-600 rounded-lg text-white" onClick={()=>{handleEditButtonClick(row.edit_url);}}>Edit</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
  }
]);

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
      cursor: pointer;
  }
`;

const ClearButton = styled.button`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:rgb(41, 121, 255)
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
      <TextField
          id="search"
          type="text"
          placeholder="Filter By Name"
          aria-label="Search Input"
          value={filterText}
          onChange={onFilter}
      />
      <ClearButton type="button" onClick={onClear}>
          X
       </ClearButton>
  </>
 );

    
    let filteredItems = props.role.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);


    const handleRowSelected = React.useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const contextActions = React.useMemo(() => {
        const handleDelete = () => {
            
            if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.email)}?`)) {
                setToggleCleared(!toggleCleared);
                 setFilteredData(differenceBy(filteredItems, selectedRows, 'email'));
            }
        };

        return (
            <button className="px-2 py-1 bg-red-600 rounded-lg text-white" key="delete" onClick={handleDelete}>
                Delete
            </button>
        );
    }, [filteredItems, selectedRows, toggleCleared]);

const handleEditButtonClick = (url) => {
   console.log(url);
   Inertia.visit(url, { method: 'get' })
 };

	return (
		 <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
        	<div className="container mx-4 mt-12">
                    <DataTable
                         title="Contact List"
                         columns={columns}
                         data={(filteredData.length || toggleCleared) ? filteredData:filteredItems}
                         pagination
                         paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                         subHeader
                         subHeaderComponent={subHeaderComponentMemo}
                         selectableRows
                         persistTableHead
                         contextActions={contextActions}
                         onSelectedRowsChange={handleRowSelected}
                         clearSelectedRows={toggleCleared}
                     />
            </div>
        </Authenticated>
		);
}