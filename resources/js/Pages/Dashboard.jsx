import * as React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Pie, Doughnut, Chart, Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Icon } from '@iconify/react';
import { DataGrid, GridToolbar} from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

export const loptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Sample',
    },
  },
};

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Sample',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const goptions = {
  plugins: {
    title: {
      display: true,
      text: 'Sample',
    }
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const pidata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const doughnut = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export const ldata = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  


export default function Dashboard(props) {

  const [pageSize, setPageSize] = React.useState(10);


  const columns = [
    { field: 'thumb', headerName: 'Thumb', width: 110,},
    { field: 'title', headerName: 'Title', width: 110,},
    { field: 'user', headerName: 'Users', width: 110, },
    { field: 'views', headerName: 'Views', width: 110 },
    { field: 'durhr', headerName: 'Dur(Hr)', sortable: true, width: 110 },
  ];


  const rows = [
    { id: 1, thumb:1, title: 'Snow', user: 'Jon', views: 35, durhr: 35  },
    { id: 2, thumb:1, title: 'Lannister', user: 'Cersei', views: 42, durhr: 35 },
    { id: 3, thumb:1, title: 'Lannister', user: 'Jaime', views: 45, durhr: 35 },
    { id: 4, thumb:1, title: 'Stark', user: 'Arya', views: 16, durhr: 35 },
    { id: 5, thumb:1, title: 'Targaryen', user: 'Daenerys', views: null },
    { id: 6, thumb:1, title: 'Melisandre', user: null, views: 150, durhr: 35 },
    { id: 7, thumb:1, title: 'Clifford', user: 'Ferrara', views: 44, durhr: 35 },
    { id: 8, thumb:1, title: 'Frances', user: 'Rossini', views: 36, durhr: 35 },
    { id: 9, thumb:1, title: 'Roxie', user: 'Harvey', views: 65, durhr: 35 },
    { id: 10, thumb:1, title: 'Roxie', user: 'Harvey', views: 65, durhr: 35 },
  ];



    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            menu={props.menu}
            logoUrl={props.logoUrl}
        >            
            <div className="container mx-auto mt-12">
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-6">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center">
                            Total Users
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 flex justify-center">
                            00
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center mt-2">
                          <Icon className="text-xl font-medium text-gray-500" icon="fa6-solid:user-large" />
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center">
                            Registered(Today)
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 flex justify-center">
                            00
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center mt-2">
                          <Icon className="text-xl font-medium text-gray-500" icon="fa6-solid:user-large" />
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center">
                            Unique User Monthly
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 flex justify-center">
                            00
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center mt-2">
                          <Icon className="text-xl font-medium text-gray-500" icon="fa6-solid:user-large" />
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center">
                            Today's Unique User
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 flex justify-center">
                            00
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center mt-2">
                          <Icon className="text-xl font-medium text-gray-500" icon="fa6-solid:user-large" />
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center">
                            Most Views(Hit)
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 flex justify-center">
                            00
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center mt-2">
                          <Icon className="text-xl font-medium text-gray-500" icon="fa6-solid:user-large" />
                        </div>
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center">
                            Most Views(Time)
                        </div>
                        <div className="mt-1 text-3xl font-semibold text-gray-900 flex justify-center">
                            00
                        </div>
                        <div className="text-sm font-medium text-gray-500 truncate flex justify-center mt-2">
                          <Icon className="text-xl font-medium text-gray-500" icon="fa6-solid:user-large" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Line options={loptions} data={ldata} />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Bar options={goptions} data={data} />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Pie data={pidata} />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Doughnut data={doughnut} />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Bar options={goptions} data={data} />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Pie data={pidata} />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <h2 className="w-full text-center mb-1 text-xl font-bold">Top Ten Content(Daily)</h2>
                      <Box sx={{ height: 470, width: '100%' }}>
                        <DataGrid
                          dataSet='Commodity'
                          density="compact"
                          rows={rows}
                          columns={columns}
                          pageSize={10}
                          rowsPerPageOptions={[5]}
                          bulkActionButtons={false}
                        />
                      </Box>    
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                      <h2 className="w-full text-center mb-1 text-xl font-bold">Top Ten Content(Daily)</h2>
                       <Box sx={{ height: 470, width: '100%' }}>
                        <DataGrid
                          dataSet='Commodity'
                          density="compact"
                          rows={rows}
                          columns={columns}
                          pageSize={10}
                          rowsPerPageOptions={[5]}
                          bulkActionButtons={false}
                        />
                      </Box>   
                    </div>
                </div>
            </div>
            
        </Authenticated>
    );
}
