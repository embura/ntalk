/*
	Struture data - plan

	{
		code_plan(moip): String,
		description: String
		quota: number
		periodicity: string
		periodicity: string
	}

	#### PLANOS ####

	db.plan.insert({code_plan: '10', description: 'Bronze', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 10240
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Combo Bronze Mensal - Email de 10GB + Anti Vírus Básico + Suporte Técnico Internet', checkScope : false});
	
	db.plan.insert({code_plan: '11', description: 'Prata', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 20480
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG09', description: 'Suporte Técnico Informática'}
	, description_plan: 'Combo Prata Mensal - Email de 20GB + Anti Vírus Básico + Suporte Técnico Informática', checkScope : false});

	db.plan.insert({code_plan: '12', description: 'Ouro', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 30720
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG52', description: 'Suporte Informática e Mobile'}
	, description_plan: 'Combo Ouro Mensal - Email de 30GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : false});

	db.plan.insert({code_plan: '13', description: 'Platinum', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 51200
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG53', description: 'Suporte Informática e Mobile com visita técnica ilimitada'}
	, description_plan: 'Combo Platinum Mensal - Email de 50GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : true});

	db.plan.insert({code_plan: '14', description: 'Bronze', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 10240
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Combo Bronze Anual - Email de 10GB + Anti Vírus Básico + Suporte Técnico Internet', checkScope : false});

	db.plan.insert({code_plan: '15', description: 'Prata', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 20480
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG09', description: 'Suporte Técnico Informática'}
	, description_plan: 'Combo Prata Anual - Email de 20GB + Anti Vírus Básico + Suporte Técnico Informática', checkScope : false});

	db.plan.insert({code_plan: '16', description: 'Ouro', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 30720
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG52', description: 'Suporte Informática e Mobile'}
	, description_plan: 'Combo Ouro Anual - Email de 30GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : false});

	db.plan.insert({code_plan: '17', description: 'Platinum', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 51200
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG53', description: 'Suporte Informática e Mobile com visita técnica ilimitada'}
	, description_plan: 'Combo Platinum Anual - Email de 50GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : true});

	db.plan.insert({code_plan: '18', description: 'Suporte', 'periodicity': '1', 'periodicityType': 'MONTHLY'
	, quota: 10240, support: {code_support: 'IG04', description: 'Suporte'}
	, description_plan: 'Suporte Mensal - Email de 10GB + Suporte Técnico Internet', checkScope : false});

	db.plan.insert({code_plan: '19', description: 'Suporte', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240, support: {code_support: 'IG04', description: 'Suporte'}
	, description_plan: 'Suporte Anual - Email de 10GB + Suporte Técnico Internet', checkScope : false});

	#### PLANOS PROMOCIONAIS ###

	db.plan.insert({code_plan: '20', description: 'Bronze Promocional', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 10240
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Combo Bronze Promocional Mensal - Email de 10GB + Anti Vírus Básico + Suporte Técnico Internet', checkScope : false});

	db.plan.insert({code_plan: '21', description: 'Prata Promocional', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 20480
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG09', description: 'Suporte Técnico Informática'}
	, description_plan: 'Combo Prata Promocional Mensal - Email de 20GB + Anti Vírus Básico + Suporte Técnico Informática', checkScope : false});

	db.plan.insert({code_plan: '22', description: 'Ouro Promocional', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 30720
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG52', description: 'Suporte Informática e Mobile'}
	, description_plan: 'Combo Ouro Promocional Mensal - Email de 30GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : false});

	db.plan.insert({code_plan: '23', description: 'Platinum Promocional', 'periodicity': '1', 'periodicityType': 'MONTHLY', quota: 51200
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG53', description: 'Suporte Informática e Mobile com visita técnica ilimitada'}
	, description_plan: 'Combo Platinum Promocional Mensal - Email de 50GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : true});

	db.plan.insert({code_plan: '24', description: 'Bronze Promocional', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 10240
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Combo Bronze Promocional Anual - Email de 10GB + Anti Vírus Básico + Suporte Técnico Internet', checkScope : false});

	db.plan.insert({code_plan: '25', description: 'Prata Promocional', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 20480
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}, support: {code_support: 'IG09', description: 'Suporte Técnico Informática'}
	, description_plan: 'Combo Prata Promocional Anual - Email de 20GB + Anti Vírus Básico + Suporte Técnico Informática', checkScope : false});

	db.plan.insert({code_plan: '26', description: 'Ouro Promocional', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 30720
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG52', description: 'Suporte Informática e Mobile'}
	, description_plan: 'Combo Ouro Promocional Anual - Email de 30GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : false});

	db.plan.insert({code_plan: '27', description: 'Platinum Promocional', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 51200
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG53', description: 'Suporte Informática e Mobile com visita técnica ilimitada'}
	, description_plan: 'Combo Platinum Promocional Anual - Email de 50GB + Anti Vírus Premium + Suporte Técnico Informática e Mobile', checkScope : true});

	db.plan.insert({code_plan: '28', description: 'Suporte Promocional', 'periodicity': '1', 'periodicityType': 'MONTHLY'
	, quota: 10240, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Suporte Promocional Mensal - Email de 10GB + Suporte Técnico Internet', checkScope : false});

	db.plan.insert({code_plan: '29', description: 'Suporte Promocional', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Suporte Promocional Anual - Email de 10GB + Suporte Técnico Internet', checkScope : false});

  #### PLANOS NEXXERA ####

	db.plan.insert({code_plan: '31', description: 'Econômico', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240
	, description_plan: 'Econômico Anual - Email de 10GB + Suporte Via chat', checkScope : false});

	db.plan.insert({code_plan: '32', description: 'Básico', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Básico Anual - Email de 10GB + Acesso IMAP + Suporte Técnico Telefônico', checkScope : false});

	db.plan.insert({code_plan: '33', description: 'Clássico', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 20480, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, description_plan: 'Clássico Anual - Email de 20GB + Acesso IMAP + Suporte Técnico Telefônico', checkScope : false});

	db.plan.insert({code_plan: '34', description: 'Protegido', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 20480, support: {code_support: 'IG04', description: 'Suporte Internet'}
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}
	, description_plan: 'Protegido Anual - Email de 20GB + Acesso IMAP + Anti Vírus Básico + Suporte Técnico Telefônico', checkScope : false});

    db.plan.insert({code_plan: '35', description: 'Turbinado', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 61440
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}, support: {code_support: 'IG53', description: 'Suporte Informática e Mobile com visita técnica ilimitada'}
	, description_plan: 'Turbinado Anual - Email de 50GB + Acesso IMAP + Anti Vírus Premium + Suporte Técnico Telefônico e Visita', checkScope : true});

	#### PLANOS REDUZIDOS ####

	db.plan.insert({code_plan: '36', description: 'Econômico', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240
	, description_plan: 'Econômico Anual - Email de 10GB + Acesso IMAP', checkScope : false});

	db.plan.insert({code_plan: '37', description: 'Básico', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240
	, description_plan: 'Básico Anual - Email de 10GB + Acesso IMAP + Suporte Via chat', checkScope : false});

	db.plan.insert({code_plan: '38', description: 'Clássico', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 20480
	, description_plan: 'Clássico Anual - Email de 20GB + Acesso IMAP + Suporte Via chat', checkScope : false});

	db.plan.insert({code_plan: '39', description: 'Protegido', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 20480
	, antivirus: {sku: 'IGA-NAV-001', description: 'Básico'}
	, description_plan: 'Protegido Anual - Email de 20GB + Acesso IMAP + Anti Vírus Básico', checkScope : false});

  db.plan.insert({code_plan: '40', description: 'Turbinado', 'periodicity': '1', 'periodicityType': 'ANNUAL', quota: 61440
	, antivirus: {sku: 'IGA-NIS-001', description: 'Premium'}
	, description_plan: 'Turbinado Anual - Email de 50GB + Acesso IMAP + Anti Vírus Premium', checkScope : false});

	db.plan.insert({code_plan: '41', description: 'Full', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240
	, description_plan: 'Diário SP full Anual - Email de 10GB + Acesso IMAP', checkScope : false});

	db.plan.insert({code_plan: '42', description: 'Promo', 'periodicity': '1', 'periodicityType': 'ANNUAL'
	, quota: 10240
	, description_plan: 'Diário SP promo Anual - Email de 10GB + Acesso IMAP', checkScope : false});
*/

module.exports = function(app){

	var BaseDao = require('./baseDao');
	var db = app.ctx.mongo;

	function PlanDao() {}

	PlanDao.prototype = new BaseDao(db.collection('plan'));

	return new PlanDao();
};
