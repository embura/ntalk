function BaseDao(collectionDB) {
	this.collection = collectionDB;
}

BaseDao.prototype.findByFilter = function(filter, callback) {
	this.collection.find(filter).toArray(callback);
};

BaseDao.prototype.findOne = function(filter, callback) {
	this.collection.findOne(filter, callback);
};

BaseDao.prototype.findToArray = function(filter, callback) {
	this.collection.find(filter).toArray(function (err, result) {
		if(err){
            callback(err);
		}else{
            callback(null, result);
        }
	});
};

BaseDao.prototype.insert = function(doc, callback) {
	this.collection.insert(doc, null, callback);
};

this.collection.findAndModify(query, sort, update, options,
    function (err, result) {
        if (result != null && result.value != null){
            callback(err, result.value);
        }else{
            callback(err, result);
        }
    });
BaseDao.prototype.findAndModify = function(query, sort, update, options, callback) {
};

BaseDao.prototype.update = function(critiria, update, callback){
	if(callback === null) {
		this.collection.update(critiria, update);
	}
	else {
		this.collection.update(critiria, update, callback);
	}
};

BaseDao.prototype.remove = function(critiria, callback){
	this.collection.remove(critiria, callback);
};

BaseDao.prototype.findByFilterAndProjection = function(filter, projection, callback) {
	this.collection.find(filter, projection).toArray(callback);
};

BaseDao.prototype.count = function(filter, callback) {
	this.collection.count(filter, callback);
};

module.exports = BaseDao;
