/*
	Struture data - pricing

	{
		code_pricing(vulcano): string,
		code_plan(moip) : string
		price: number
	}

	### PLANOS ###

	db.pricing.insert({code_pricing: '22', 'code_plan': '10', price: 999});
	db.pricing.insert({code_pricing: '23', 'code_plan': '11', price: 1499});
	db.pricing.insert({code_pricing: '24', 'code_plan': '12', price: 2499});
	db.pricing.insert({code_pricing: '25', 'code_plan': '13', price: 3499});
	db.pricing.insert({code_pricing: '26', 'code_plan': '14', price: 9990});
	db.pricing.insert({code_pricing: '27', 'code_plan': '15', price: 14990});
	db.pricing.insert({code_pricing: '28', 'code_plan': '16', price: 24990});
	db.pricing.insert({code_pricing: '29', 'code_plan': '17', price: 34990});
	db.pricing.insert({code_pricing: '30', 'code_plan': '18', price: 699});
	db.pricing.insert({code_pricing: '31', 'code_plan': '19', price: 6990});

	### PLANOS DESCONTO ###

	db.pricing.insert({code_pricing: '32', 'code_plan': '20', price: 799});
	db.pricing.insert({code_pricing: '33', 'code_plan': '21', price: 1199});
	db.pricing.insert({code_pricing: '34', 'code_plan': '22', price: 1999});
	db.pricing.insert({code_pricing: '35', 'code_plan': '23', price: 2799});
	db.pricing.insert({code_pricing: '36', 'code_plan': '24', price: 7920});
	db.pricing.insert({code_pricing: '37', 'code_plan': '25', price: 11990});
	db.pricing.insert({code_pricing: '38', 'code_plan': '26', price: 19990});
	db.pricing.insert({code_pricing: '39', 'code_plan': '27', price: 27990});
	db.pricing.insert({code_pricing: '40', 'code_plan': '28', price: 489});
	db.pricing.insert({code_pricing: '41', 'code_plan': '29', price: 4890});

	### NOVOS PREÇOS PARA FASE IMAP ###
	db.pricing.insert({code_pricing: '42', 'code_plan': '31', price: 3990});
	db.pricing.insert({code_pricing: '43', 'code_plan': '32', price: 5990});
	db.pricing.insert({code_pricing: '44', 'code_plan': '33', price: 7490});
	db.pricing.insert({code_pricing: '45', 'code_plan': '34', price: 9990});
	db.pricing.insert({code_pricing: '46', 'code_plan': '35', price: 19990});

	db.pricing.insert({code_pricing: '47', 'code_plan': '36', price: 3990});
	db.pricing.insert({code_pricing: '48', 'code_plan': '37', price: 5990});
	db.pricing.insert({code_pricing: '49', 'code_plan': '38', price: 7490});
	db.pricing.insert({code_pricing: '50', 'code_plan': '39', price: 9990});
	db.pricing.insert({code_pricing: '51', 'code_plan': '40', price: 19990});
	db.pricing.insert({code_pricing: '52', 'code_plan': '41', price: 5990});
	db.pricing.insert({code_pricing: '53', 'code_plan': '42', price: 3990});

*/

module.exports = function(app){

	var BaseDao = require('./baseDao');
	var db = app.ctx.mongo;

	function PricingDao() {}

	PricingDao.prototype = new BaseDao(db.collection('pricing'));

	return new PricingDao();
}