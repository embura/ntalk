module.exports = function(app){

	var BaseDao = require('./baseDao');
	var db = app.ctx.mongo;

	function NotificationPaymentDao() {}

	NotificationPaymentDao.prototype = new BaseDao(db.collection('notification_payment'));

	NotificationPaymentDao.prototype.findOrderByDate = function(filter, order, maxLimit, callback) {
		if(maxLimit){
			this.collection.find(filter).sort({_id : order}).limit(maxLimit).toArray(callback);
		}else{
			this.collection.find(filter).sort({_id : order}).toArray(callback);
		}
	};

	return new NotificationPaymentDao();
}