Ext.define('lotterySencha.model.Jackpot', {
	extend: 'Ext.data.Model',
	config: {
		idProperty: 'objectId',
		fields: [
			{name: 'objectId', type: 'string'},
			{name: 'typeId', type: 'string'},
			{name: 'money', type: 'auto'},
			{name: 'createdAt', type: 'auto'},
			{name: 'updatedAt', type: 'auto'},
			{name: 'winningNumbers', type: 'auto'},
			{name: 'drawNo', type: 'auto'},
			{name: 'drawDate', type: 'auto'},
			{name: 'special', type: 'auto'}
		]
	}
});