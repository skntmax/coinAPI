const express = require('express')
const router = require('express').Router()
const bodyParser = require('body-parser')
const axios = require('axios')
router.use(express.json())
router.use(bodyParser.urlencoded({ extended: false }))
const jwt = require('jsonwebtoken')
const exchangeModel  = require('./../database/db') 


router.get('/exchanges' , async(req,res)=>{


    let count = await exchangeModel.count()

    console.log(await exchangeModel.count())
    var options = {
        method: "GET",
        baseURL: "https://rest.coinapi.io/",
        url: "/v1/exchanges",
        headers: { 'X-CoinAPI-Key' : 'D5F95B6A-8945-42C6-811F-25ABDF85A0BA' }
      };
      
      axios(options).then(async (resp)=>{
   
        // console.log(resp.data)
         resp.data.map(async (ele,ind)=>{
            if( count<339 ){

                const result= new exchangeModel({
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
                })
                await result.save()   
          
            } 
        
           })
           
           const check = await exchangeModel.count()
      console.log( await exchangeModel.find({}) ) 
      console.log("check " + check)
      if(check<=339){
        let data= await exchangeModel.find()
        
        if(data){
            console.log(data)
            res.send({ 
                data:data, 
                success:1 
            } )     
        }
               
      }
      else{
           res.send({success:0})
      }


        }).catch(err=>{
            res.send({success:0})
        })


    }) 



    
router.get('/exchanges/:id' , async(req,res)=>{

    
   try{
    console.log(await exchangeModel.count())
    var options = {
        method: "GET",
        baseURL: "https://rest.coinapi.io/",
        url: "/v1/exchanges/"+req.params.id,
        headers: { 'X-CoinAPI-Key' : 'D5F95B6A-8945-42C6-811F-25ABDF85A0BA' }
      };
      
      axios(options).then(async (resp)=>{
          console.log(resp.data)
  const result= new exchangeModel({
  exchange_id: resp.data[0].exchange_id,
  website: resp.data[0].website,
  name: resp.data[0].name,
  data_start: resp.data[0].data_start,
  data_end: resp.data[0].data_end,
  data_quote_start: resp.data[0].data_quote_start,
  data_quote_end: resp.data[0].data_quote_end,
  data_orderbook_start: resp.data[0].data_orderbook_start,
  data_orderbook_end: resp.data[0].data_orderbook_end,
  data_trade_start:resp.data[0].data_trade_start,
  data_trade_end: resp.data[0].data_trade_end,
  data_symbols_count: resp.data[0].data_symbols_count,
  volume_1hrs_usd: resp.data[0].volume_1hrs_usd,
  volume_1day_usd: resp.data[0].volume_1day_usd,
  volume_1mth_usd: resp.data[0].volume_1mth_usd  
        })

        if( await result.save()){
            const last_count = await exchangeModelById.find().sort('_id','descending').limit(1).find(function(err, post) {
                console.log( post );
              });
    
            res.send({
                data:last_count
            })     
        }
        
        
                   
    }).catch(err=>{
        res.send({success:0 , Err : err})
         
    })    
   }
   catch(err){
    res.send({success:0 , Err : err}) }
        
   })
     




module.exports= router


