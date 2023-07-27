const mongoose = require("mongoose");



const connectDB = () => {
  mongoose.connect('mongodb+srv://ehteahmad:0gvXTN5yq8HrSluS@cluster0.h5s6ofc.mongodb.net/instagr').then(()=>{
    console.log('connected to mongodb database');
  }).catch(()=>{
      console.log('problem connected to mongodb database');
  })
};

module.exports = connectDB;
