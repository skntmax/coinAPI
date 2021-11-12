const  mongoose  = require("mongoose")

mongoose.connect("mongodb://localhost:27017/coinapi", {
    useNewUrlParser: true,
     useUnifiedTopology: true
 }).then(()=>{
      console.log('connected to coinapi database  ')
 }).catch(err=>{ 
     console.log(err)
 })

 const exchangeModel = mongoose.model('exchange' , {
    exchange_id : {
         type : String
    },
     OKCOIN_CNY :{ 
        type : String
    },
    website : {
        type : String
    },
    name :{
        type : String
    } ,
    data_start:{
        type : String
    } ,
    data_end :{
        type : String
    } ,
    data_quote_start :{
        type : String
    } ,
    data_quote_end :{
        type : String
    }
     ,
    data_orderbook_start :{
        type : String
    } , 
    data_orderbook_end :{
        type : String
    } ,  
    data_trade_start :{
        type : String
    } , 

    data_trade_end:{type : String },
    data_symbols_count: { type : String},
    volume_1hrs_usd: {type : String },
    volume_1day_usd: {type : String },
    volume_1mth_usd: {type : String }
 
     
})

const exchangeModelById =  mongoose.model('exchangeModelById' , {
    exchange_id : {
         type : String
    },
     OKCOIN_CNY :{ 
        type : String
    },
    website : {
        type : String
    },
    name :{
        type : String
    } ,
    data_start:{
        type : String
    } ,
    data_end :{
        type : String
    } ,
    data_quote_start :{
        type : String
    } ,
    data_quote_end :{
        type : String
    }
     ,
    data_orderbook_start :{
        type : String
    } , 
    data_orderbook_end :{
        type : String
    } ,  
    data_trade_start :{
        type : String
    } , 

    data_trade_end:{type : String },
    data_symbols_count: { type : String},
    volume_1hrs_usd: {type : String },
    volume_1day_usd: {type : String },
    volume_1mth_usd: {type : String }
 
     
})


module.exports = exchangeModel 