const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/node_api',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err)
            console.log('Connected to Mongo DB')
        else
            console.log('COnnection error')


    }
)



