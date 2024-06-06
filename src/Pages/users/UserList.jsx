import React , { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { userRows } from '../../datas';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const style = {
  userListUser : `flex items-center`,
  userListImg : `w-[32px] h-[32px] rounded-full mr-2.5 object-cover`,
  userListDelete : `text-red-500 cursor-pointer`
}

export default function UserList() {
  const [userDatas , setUserDatas] = useState(userRows);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const userDelete = userID => {
    setUserDatas(userDatas.filter(userData => userData.id !== userID))
  }

  const commonColumns = [
    {
      field: 'id',
      headerName: 'ID',
      minWidth: 50,
      flex: 0.5,
    },
    {
      field: 'user',
      headerName: 'User',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <Link to={`user/${params.row.id}`}>
            <div className={style.userListUser}>
              <img src={params.row.avatar} className={style.userListImg} alt={params.row.username} />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
  ];

  const desktopColumns = [
    ...commonColumns,
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 0.5,
      minWidth: 100,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`user/${params.row.id}`}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => userDelete(params.row.id)}
              className={style.userListDelete}
            />
          </>
        );
      },
    },
  ];

  const mobileColumns = [
    ...commonColumns,
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      minWidth: 100,
      renderCell: (params) => {
        return (
          <>
            <Link to={`user/${params.row.id}`}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => userDelete(params.row.id)}
              className={style.userListDelete}
            />
          </>
        );
      },
    },
  ];

  const columns = isSm ? mobileColumns : desktopColumns;


  return (
    <div className='flex-[4] mx-2'>
    <DataGrid 
      rows={userDatas}
      columns={columns}
      pageSize={3}
      rowsPerPageOptions={[2,3,4,5]}
      pagination
      disableSelectionOnClick
      autoHeight={true}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 3,
          },
        },
      }}
    />
  </div>
  )
}
