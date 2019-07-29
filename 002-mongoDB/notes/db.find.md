## db.find();
### 返回所有

## db.find({filter},{condition})
### 根据条件查询返回

## db.find().size() 
### 返回查询条数

## db.find().skip(Number)
### 跳过前Number结果

## db.find().limit(Number);
### 限制查询数量

## db.find().sort({condition}) 1：正序 -1: 反序
### 排序


##{ key: { $gt: Numer }}    大于
##{ key: { $lt: Numer }}    小于

##{key: { $in: Array }}     包含
##{key: { $nin: Array }}    不包含
