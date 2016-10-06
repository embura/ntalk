/**

	Estrutura da coleção

	{
		"code_subscription_vulcano" : number,
		"code_subscription" : string,
		"cancelled_at" : string (YYYY-MM-DD),
		"date_next_invoice" : string (YYYY-MM-DD),
		"date_to_cancel" : string (YYYY-MM-DD),
		"code_customer" : number
	}

**/

module.exports = function(app){

	var BaseDao = require('./baseDao');
	var db = app.ctx.mongo;

	function CancelledSubscriptionDao() {}

	CancelledSubscriptionDao.prototype = new BaseDao(db.collection('cancelled_subscription'));

	CancelledSubscriptionDao.prototype.findByLessDate = function(date, callback) {
		var self = this;
		self.collection.find({ date_to_cancel : { $lte : date }, status : 'ACTIVE'}).toArray(callback);
	};

	return new CancelledSubscriptionDao();
}