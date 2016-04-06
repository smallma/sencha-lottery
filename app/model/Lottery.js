Ext.define('lotterySencha.model.Lottery', {
	extend: 'Ext.data.Model',
	config: {
		idProperty: 'objectId',
		fields: [
			{name: 'objectId', type: 'string'},
			{name: 'typeId', type: 'string'},
			{name: 'money', type: 'auto'},
			{name: 'createdAt', type: 'auto'},
			{name: 'updatedAt', type: 'auto'}
		]
	}
});