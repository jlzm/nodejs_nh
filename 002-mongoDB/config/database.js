import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017/ravent';

const options = {
    useNewUrlParser: true
}

mongoose.Promise = global.Promise;

mongoose.connect(url, options).then(db => {
    console.log('数据库连接成功');
}).catch(error => {
    console.log('连接数据库失败');
})

module.exports = mongoose;