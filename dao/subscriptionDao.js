/*

	Struture data - subscriptions
	{
		code_customer : int
		code_subscription : string
		code_subscription_vulcano : int
		code_plan : string
		createdAt : date
		login : string
		domain : string
		name: string	
		ip : string
		status : string
		firstPurchase : boolean
		partner_ref : string
		antivirus : {
			code_subscription_antivirus : string
			url_download : string
		}
	}
*/


module.exports = function(app){

	var db = app.ctx.mongo;
	var BaseDao = require('./baseDao');

	function SubscriptionDao() {}

	SubscriptionDao.prototype = new BaseDao(db.collection('subscription'));

	SubscriptionDao.prototype.findOrderByDate = function(filter, order, maxLimit, callback) {
		if(maxLimit){
			this.collection.find(filter).sort({_id : order}).limit(maxLimit).toArray(callback);
		}else{
			this.collection.find(filter).sort({_id : order}).toArray(callback);
		}
	};

	return new SubscriptionDao();
}