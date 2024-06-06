import React from 'react';
import { Link  , useParams} from 'react-router-dom';
import Chart from '../../Components/chart/Chart.jsx';
import { productsSaleData } from '../../datas.jsx';

const style = {
    product : `flex-[4] p-5`,
    productTitleContainer : `flex items-center justify-between`,
    productTitle : `text-xl`,
    productAddBtn : `w-[80px] p-[5px] cursor-pointer text-white text-[16px] bg-slate-700 rounded-md`,
    productTop : `flex flex-col lg:flex-row`,
    productTopLeft : `flex-1`,
    productTopRight : `flex-1 p-5 m-5 shadow-normal`,
    productInfoTop : `flex items-center`,
    productInfoImg : `w-[40px] h-[40px] rounded-full mr-5`,
    productName : `font-semibold`,
    productInfoBottom : `mt-3`,
    productInfoItem : `w-[200px] flex justify-between`,
    productInfoKey : `font-semibold`,
    productInfoValue : `font-extralight`,
} 

export default function Product() {
    let {productID} = useParams();

  return (
    <div className={style.product}>
        <div className={style.productTitleContainer}>
            <h1 className={style.productTitle}>Product</h1>
            <Link to="/newProduct">
                <button className={style.productAddBtn}>Create</button>
            </Link> 
        </div>

        <div className={style.productTop}>
            <div className={style.productTopLeft}>
                <Chart data={productsSaleData} title="Monthly Sale" dataKey='sales' grid/>
            </div>
            <div className={style.productTopRight}>
                <div className={style.productInfoTop}>
                    <img src="/images/dell.jpg" alt="Dell" className={style.productInfoImg} />
                    <span className={style.productName}>Dell laptop</span>
                </div>

                <div className={style.productInfoBottom}>
                    <div className={style.productInfoItem}>
                        <div className={style.productInfoKey}>ID :</div>
                        <div className={style.productInfoValue}>{productID}</div>
                    </div>
                    <div className={style.productInfoItem}>
                        <div className={style.productInfoKey}>Name :</div>
                        <div className={style.productInfoValue}>hp</div>
                    </div>
                    <div className={style.productInfoItem}>
                        <div className={style.productInfoKey}>Sales :</div>
                        <div className={style.productInfoValue}>$9000</div>
                    </div>
                    <div className={style.productInfoItem}>
                        <div className={style.productInfoKey}>Active :</div>
                        <div className={style.productInfoValue}>Yes</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
