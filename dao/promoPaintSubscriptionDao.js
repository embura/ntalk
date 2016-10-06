/*********************************************
* Dao Class
*
* @App: Promoção Tinta do Diário SP
*
* Author: Erick Rettozi
**********************************************/

module.exports = function(app){
	var BaseDao = require('./baseDao');

	function PaintSubscriptionDao(){}

	PaintSubscriptionDao.prototype = new BaseDao(app.ctx.mongo.collection('subscription'));

	PaintSubscriptionDao.prototype.loginExists = function(plogin, callback){
		var self = this;
		self.collection.count({login:plogin},callback);
	}

	PaintSubscriptionDao.prototype.insert = function(data, callback){
		var self = this;
		self.collection.insert(data,callback);
	}

	return new PaintSubscriptionDao();
}
