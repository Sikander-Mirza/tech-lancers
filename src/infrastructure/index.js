const mongoose = require("mongoose")

const ConnectDB = async ()=>{
  const uri = 'mongodb+srv://sikandersunny2017:VWo4sEgFqok4ol3w@cluster0.0g0br.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

  mongoose.connect(uri)
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Failed to connect to MongoDB', err));
}

module.exports = {ConnectDB}

