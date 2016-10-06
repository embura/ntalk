/**
	
	Estrutura da coleção

	{
		code_customer : string
		code_subscription : string,
		plan_to_change : string,
		plan_previous : string,
		date_to_change : string (YYYY-MM-DD),
		createAt : string (YYYY-MM-DD HH24:MI:SS),
		updateAt: string (YYYY-MM-DD HH24:MI:SS),
		isChanged : boolean
	}

**/


module.exports = function(app){
	var BaseDao = require('./baseDao');
	var db = app.ctx.mongo;

	require("date-utils");

	function ScheduleChangePlanDao() {}

	ScheduleChangePlanDao.prototype = new BaseDao(db.collection('schedule_change_plan'));

	ScheduleChangePlanDao.prototype.findByLessDate = function(date, callback) {
		var self = this;
		self.collection.find({date_to_change: {$lte : date}, isChanged: false, status: {$ne: 'CHANGING'} }).toArray(callback);
	};

	return new ScheduleChangePlanDao();
}