/**

	Estrutura da coleção

	{
		"code_subscription" 	: String,
		"name"						: String,
		"login"						: String,
		"domain"					: String,
		"code_plan"					: String
		"next_invoice"				: String (YYYY-MM-DD),
		"status" 					: 'OVERDUE' | 'ACTIVE' | 'CANCELED',
		"step"						: String ( stepOverdueEnum ),
		"date_to_execute" 			: String (YYYY-MM-DD),
		"date_overdue" 				: String (YYYY-MM-DD),
		"date_updated"				: String (YYYY-MM-DD)
	}
**/

module.exports = function(app){
	var BaseDao = require('../dao/baseDao');
	var db = app.ctx.mongo;
	var StatusSubscriptionEnum = require('../util/statusSubscriptionEnum.js')
	var StepOverdueEnum = require('../util/stepOverdueEnum.js')

	function OverdueSubscriptionDao(){}

	OverdueSubscriptionDao.prototype = new BaseDao(db.collection('overdue_subscription'));

	OverdueSubscriptionDao.prototype.findOverdueSubscriptionByDate = function(date, callback){
		var self = this;
		self.collection.find({ date_to_execute : { $lte : date }, status : StatusSubscriptionEnum.OVERDUE.key , step : {$ne : StepOverdueEnum.FIFTH_STEP.key}}).toArray(callback);
	}

	OverdueSubscriptionDao.prototype.updateStepAndDateToExecute = function (overdueSubscription, nextStepEnum, nextDateToExecute, callback){
		var self = this;

		var dateUpdated = new Date().toFormat('YYYY-MM-DD');

		self.collection.findAndModify(
				{ _id : overdueSubscription._id }, 
				null,
				{$set : {
						step : nextStepEnum.key,
						date_to_execute : nextDateToExecute,
						date_updated : dateUpdated
						}
				},
				{ upsert : false },
				callback
		);
	}

	OverdueSubscriptionDao.prototype.isOverdue = function (codeSubscription, callback){
		var self = this;
		var overdueDate = new Date();
		overdueDate.setDate(overdueDate.getDate() - 15);

		self.collection.find({ code_subscription : codeSubscription, date_overdue : { $gte : overdueDate.toFormat('YYYY-MM-DD') }, status : StatusSubscriptionEnum.OVERDUE.key}).toArray(function(err, result){
			if(err){
				callback(err);
				return;
			}

			return (result && result.length > 0) ? callback(null, true) : callback(null, false);
		});
	}

	return new OverdueSubscriptionDao();
}