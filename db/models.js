const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes
const dbconfig=require('../config').DB
const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})
const user=db.define('health_user',{
    id:{
        allowNull:false,
        type:dt.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
   user_name:{
            allowNull:false,
            type:dt.STRING
        },
    password:{
        allowNull:false,
        type:dt.STRING
    }
})
db.sync({
    //alter:true
}).then(()=>{
    console.log("dc sync")
})
module.exports={
    db,user
}