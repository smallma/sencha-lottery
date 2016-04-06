Ext.define('lotterySencha.store.Jackpot', {
	extend: 'Ext.data.Store',
	requires: 'lotterySencha.model.Jackpot',

	config: {
		model: 'lotterySencha.model.Jackpot',
		data: [],
		sorters: [{property: 'objectId', direction: 'ASC'}]
	},
	fetch: function (successCB, failedCB) {
		var config = lotterySencha.config;
		var that = this;

		Ext.Ajax.request({
			disableCaching: false,
			timeout: 4000,
		    url: config.parseServerUrl + 'functions/lastLotteryResult',
		    headers: {
		    	'Content-Type': 'application/json',
		    	'X-Parse-Application-Id': config.parseAppId,
		    	'X-Parse-REST-API-Key': config.parseRestApiKey
		    },
		    method: 'POST',
		    success: function (response) {
		    	var responseResult = JSON.parse(response.responseText).result;
		    	console.log(responseResult);
		    	
		    	that.removeAll();

		    	Ext.Array.each(responseResult, function (record) {
		    		if (record.typeId !== 2 && record.typeId !== 4 && record.typeId !== 10) {
		    			return;
		    		}

		    		console.log(record.drawNo);
		    		that.add({
		    			'typeId': record.typeId,
		    			'money': record.jackpot,
		    			'objectId': record.objectId,
		    			'createdAt': record.createdAt,
		    			'updatedAt': record.updatedAt,
		    			'winningNumbers': record.winningNumbers,
		    			'drawNo': record.drawNo,
		    			'drawDate': record.drawDate,
		    			'special': record.special
		    		});
		    	});
		    }
		});
	}
});