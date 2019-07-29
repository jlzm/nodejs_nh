import Event from '../models/event';

Event.find()
    .then(docs => {
        console.log(`返回所有文档${docs}`);
    })
    .catch(error => console.log(`连接数据库失败${error}`))

Event.find({title: 'Nodejs 开发者大会'})
    .then(docs => {
        console.log(`返回指定标题文档${docs}`);
    })
    .catch(error => console.log(`连接数据库失败${error}`))

Event.findOne()
    .then(res => console.log(`查询一个结果${res}`))
    .catch(error => console.log(`连接数据库失败${error}`))