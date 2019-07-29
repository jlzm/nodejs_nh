import Event from '../../models/event';
import data from './simpleEvents.json';

Event.insertMany(data)
    .then(res => console.log('数据插入成功'))
    .catch(error =>  console.log(error));