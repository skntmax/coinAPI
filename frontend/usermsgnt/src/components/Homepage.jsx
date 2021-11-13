import react from 'react'
import React , {useState,useEffect} from 'react'
import { useHistory , Link } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'
import './styling/style.css'

export default function Homepage() {
   const [coindata,setCoinData] = useState([]) 

   useEffect(() => {
    try{
      axios.get('/exchanges').then(res=>{ 
        console.log(res.data.data)
        
        res.data.data.map( async  function (ele,index) {
             console.log(ele)
             setCoinData([ ...coindata, { 
            exchange_id: ele.exchange_id,
            website: ele.website,
            name: ele.name,
            data_start: ele.data_start,
            data_end: ele.data_end,
            data_quote_start: ele.data_quote_start,
            data_quote_end: ele.data_quote_end,
            data_orderbook_start: ele.data_orderbook_start,
            data_orderbook_end: ele.data_orderbook_end,
            data_trade_start:ele.data_trade_start,
            data_trade_end: ele.data_trade_end,
            data_symbols_count: ele.data_symbols_count,
            volume_1hrs_usd: ele.volume_1hrs_usd,
            volume_1day_usd: ele.volume_1day_usd,
            volume_1mth_usd: ele.volume_1mth_usd
          }
         ])
          
    })
        
     
      console.log(coindata)

      }).catch(err=>{
         alert(err)
      })    
    } 
    catch(err){
       alert(err)
    }

   }, [])
  
    return (
        <>
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">exchange_id</th>
      <th scope="col"> website</th>
      <th scope="col">name</th>
      <th scope="col">data_start</th>
      <th scope="col">data_end</th>
      <th scope="col">  data_quote_start</th>
      <th scope="col"> data_orderbook_end</th>
      <th scope="col">data_trade_start</th>
      <th scope="col">data_trade_end</th>
      <th scope="col">data_symbols_count</th>
      <th scope="col">volume_1hrs_usd</th>
      <th scope="col">volume_1day_usd</th>
      <th scope="col">volume_1mth_usd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{coindata.exchange_id}</td>
      <td>{coindata.website}</td>
      <td>{coindata.name}</td>
      <td>{coindata.data_start}</td>
      <td>{coindata.data_end}</td>
      <td>{coindata.data_quote_start}</td>
      <td>{coindata.data_orderbook_start}</td>
      <td>{coindata.data_orderbook_end}</td>
      <td>{coindata.data_trade_start}</td>
      <td>{coindata.data_trade_end}</td>
      <td>{coindata.data_symbols_count}</td>
      <td>{coindata.volume_1hrs_usd}</td>
      <td>{coindata.volume_1day_usd}</td>
      <td>{coindata.volume_1mth_usd}</td>
    </tr>
  </tbody>
</table>
             
        </>
    )
}
