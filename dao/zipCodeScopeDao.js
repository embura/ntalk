module.exports = function(app){

	var BaseDao = require('./baseDao');
	var db = app.ctx.mongo;

	function ZipCodeScopeDao() {}

	ZipCodeScopeDao.prototype = new BaseDao(db.collection('zip_code_scope'));

	return new ZipCodeScopeDao();
}