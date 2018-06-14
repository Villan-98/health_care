const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes
const dbconfig=require('../config').DB
const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})
const user=db.define('anganwadiCenter',{

   user_name:{
            allowNull:false,
            type:dt.STRING
        },
    password:{
        type:dt.STRING,
        defaultValue:'123'
    },
    address:{
       allowNull:false,
        type:dt.STRING,
    },
    locality:{
       type:dt.STRING,
        allowNull:false,

    },
    block:{
       type:dt.STRING,
        allowNull:false
    },
    zone:{
       type:dt.STRING,
        allowNull:false
    }
})
db.sync({
    alter:true
}).then(()=>{
    console.log("db sync")
})
module.exports={
    db,user
}