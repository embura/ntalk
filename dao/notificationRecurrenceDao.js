module.exports = function(app){

	var BaseDao = require('./baseDao');
	var db = app.ctx.mongo;

	function NotificationRecurrenceDao() {}

	NotificationRecurrenceDao.prototype = new BaseDao(db.collection('notification_recurrence'));

	return new NotificationRecurrenceDao();
};
