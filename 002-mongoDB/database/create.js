import Event from '../models/event';

const name = new Event({
    title: 'Node.js 开发者大会!'
});

name.save()
    .then(res => console.log(res))
    .catch(error => console.log(error))
