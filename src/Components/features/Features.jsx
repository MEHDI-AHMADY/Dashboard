import React from 'react';
import { featureData } from '../../datas';

const style = {
    features : `w-full flex gap-4 md:justify-between md:gap-0 flex-wrap`,
    featureItem : `flex-1 my-2 lg:my-0 mx-5 p-[30px] cursor-pointer rounded-lg shadow-normal`,
    featureTitle : `text-[20px] dark:text-white`,
    featureContainer : `flex items-center my-2.5 mx-0`,
    featureMoney : `text-[30px] font-medium dark:text-white`,
    featureRate : `flex items-center ml-5 dark:text-white`,
    featureSub : `text-[15px] text-gray-600 dark:text-white`
}

export default function Features() {
  return (
    <div className={style.features}>
        {featureData.map((feature , index) => (
        <div key={index} className={style.featureItem}>
            <span className={style.featureTitle}>{feature.title}</span>
            <div className={style.featureContainer}>
                <span className={style.featureMoney}>{feature.money}</span>
                <span className={style.featureRate}>
                    {feature.rate} {feature.icon}
                </span>
            </div>
            <span className={style.featureSub}>{feature.sub}</span>
        </div>
        ))}
    </div>
  )
}
