import React , { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { products } from '../../datas';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './products.css'

const style = {
  productListProduct : `flex items-center`,
  productListImg : `w-[32px] h-[32px] rounded-full mr-2.5 object-cover`,
  productListDelete : `text-red-500 cursor-pointer`
}

export default function Products() {
  const [productsData , setProductsData] = useState(products);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const productDelete = productID => {
    setProductsData(productsData.filter(productsData => productsData.id !== productID))
  }

  
  const commonColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    {
      field: 'title',
      headerName: 'Name',
      width: 80,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`}>
            <div className={style.productListProduct}>
              <img src={params.row.avatar} className={style.productListImg} alt={params.row.title} />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
  ];

  const desktopColumns = [
    ...commonColumns,
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => productDelete(params.row.id)}
              className={style.productListDelete}
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
      width: 80,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <Button>Edit</Button>
            </Link>
            <DeleteOutlineIcon
              onClick={() => productDelete(params.row.id)}
              className={style.productListDelete}
            />
          </>
        );
      },
    },
  ];

  const columns = isSm ? mobileColumns : desktopColumns;

  return (
    <div className='flex-[4] mx-2'>
    <DataGrid className='dark:text-white'
      rows={productsData}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5 , 10 , 15]}
      pagination
      disableSelectionOnClick
      checkboxSelection
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
    />
  </div>
  )
}
