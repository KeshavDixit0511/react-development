import React,{useState,useEffect} from 'react'
import finhub from '../APIs/finhub'
function stockData({symbol}) {
    const [stockData,setStockData]=useState()
    useEffect(()=>{
        let isMounted = true;
        const fetchData = async()=>{
            try{
                const response = await finhub.get('/stock/profile2',{
                    params:{
                        symbol
                    }
                })
                if(isMounted)(
                    setStockData(response.data)
                )
            }catch(error){

            }
        }
        fetchData()
        return ()=> (isMounted =false);
    },[symbol])
  return <div>
    {stockData && (
        <div className='row border bg-white shadow-sm p-4 mt-5'>
            <div className="col">
                <div>
                    <span className="fw-fold">Name:</span>
                    {stockData.name}
                </div>
                <div>
                    <span className="fw-fold">Country:</span>
                    {stockData.country}
                </div>
                <div>
                    <span className="fw-fold">Ticker:</span>
                    {stockData.ticker}
                </div>
            </div>

            <div className="col">
                <div>
                    <span className="fw-fold">Exchange:</span>
                    {stockData.exchange}
                </div>
                <div>
                    <span className="fw-fold">Industry:</span>
                    {stockData.finhubIndustry}
                </div>
                <div>
                    <span className="fw-fold">IPO:</span>
                    {stockData.ipo}
                </div>
            </div>

            <div className="col">
                <div>
                    <span className="fw-fold">Market Cap:</span>
                    {stockData.marketCapitaliation}
                </div>
                <div>
                    <span className="fw-fold">Shares Outstanding:</span>
                    {stockData.shareOutstanding}
                </div>
                <div>
                    <span className="fw-fold">URL:</span>
                    <a href={stockData.weburl}>{stockData.weburl}</a>
                </div>
            </div>

        </div>
    )}
  </div>
}

export default stockData
