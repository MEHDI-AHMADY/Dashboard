import React , { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { products } from '../../datas';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const style = {
  productListProduct : `flex items-center`,
  productListImg : `w-[32px] h-[32px] rounded-full mr-2.5 object-cover`,
  productListDelete : `text-red-500 cursor-pointer`
}

export default function Products() {
  const [productsData , setProductsData] = useState(products);

  const productDelete = productID => {
    setProductsData(productsData.filter(productsData => productsData.id !== productID))
  }

  const columns = [
   {
    field : 'id' ,
    headerName : 'id',
    width : 90,
   },
   {
    field : 'title' ,
    headerName : 'Name',
    width : 200,
    renderCell : (params) => {
      return (
          <Link to={`/product/${params.row.id}`}>
            <div className={style.productListProduct}>
              <img src={params.row.avatar} className={style.productListImg} />
              {params.row.title}
            </div>
          </Link>
        )
    }
   },
   {
    field : 'price' ,
    headerName : 'Price',
    width : 120
  },
  {
    field : 'action',
    headerName : 'Action',
    width : 150,
    renderCell : (params) => {
     return (
      <>
        <Link to={`/product/${params.row.id}`}>
          <Button>Edit</Button>
        </Link>
        <DeleteOutlineIcon onClick={() => productDelete(params.row.id)} className={style.productListDelete}/>
      </>
      )
    }
  }
  ]

  return (
    <div className='flex-[4]'>
    <DataGrid 
      rows={productsData}
      columns={columns}
      pageSize={5}
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
