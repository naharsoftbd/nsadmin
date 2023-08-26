import React, { useState, useMemo }  from "react";
import Authenticated from '@/Layouts/Authenticated';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';
import differenceBy from 'lodash/differenceBy';
import { router } from '@inertiajs/react';
import {TextField,ClearButton} from '@/Components/Style';

export default function ExpandedComponent({ type = 'submit', className = '', childData, children }){
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
        name: 'Slug',
        selector: row => row.slug,
        sortable: true,
    },
    {
        name: 'Order By',
        selector: row => row.order_by,
        sortable: true,
    },
    {
        name: 'Menu Method',
        selector: row => row.menu_method,
        sortable: true,
    },
    {
        name: 'Menu Icon',
        selector: row => row.menu_icon,
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
      cell: (row) => <button className="px-2 py-1 bg-green-600 rounded-lg text-white" onClick={()=>{handleEditButtonClick(row.id);}}>Edit</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
    ]);

    const handleEditButtonClick = (id) => {
        id ? router.visit(`/chidmenus/${id}/edit/`, { method: 'get' }):null;
    };

    let filteredItems = childData?.childmenus.filter(
        item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
    );



    const handleRowSelected = React.useCallback(state => {
        setSelectedRows(state.selectedRows);
    }, []);

    const contextActions = React.useMemo(() => {
        const handleDelete = () => {
            
            if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map(r => r.name)}?`)) {
                setToggleCleared(!toggleCleared);
                //.log(r.id);
                selectedRows.map((row) => Inertia.visit(route('menus.delete',row.id), { method: 'delete' }));
                setFilteredData(differenceBy(filteredItems, selectedRows, 'slug'));
            }
        };

        return (
            <button className="px-2 py-1 bg-red-600 rounded-lg text-white" key="delete" onClick={handleDelete}>
                Delete
            </button>
        );
    }, [filteredItems, selectedRows, toggleCleared]);

    console.log(filteredItems);

      return (
        <DataTable
         title=""
         columns={columns}
         data={(filteredData.length || toggleCleared) ? filteredData:filteredItems}
         pagination
         paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
         selectableRows
         persistTableHead
         contextActions={contextActions}
         onSelectedRowsChange={handleRowSelected}
         clearSelectedRows={toggleCleared}
         
        />
        );
	}