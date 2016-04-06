Ext.define('lotterySencha.controller.Lottery', {
	extend: 'Ext.app.Controller',
	requires: [
		'lotterySencha.view.Main'
	],

	config: {
		refs: {
			mainView: {
				selector: 'mainView',
				xtype: 'mainView',
				autoCreate: true
			}
		},
		control: {
			mainView: {
				tapBtnRefresh: 'onTapBtnRefresh'
			}
		}
	},
	_refreshThrottled: Ext.Function.createThrottled(function (dom) {
		Ext.getStore('Jackpot').fetch();

		dom.addCls('button-pressed');

		setTimeout(function () {
		    dom.removeCls('button-pressed');
		}, 500)
	}, 2000, this),
	onTapBtnRefresh: function (dom) {
		this._refreshThrottled(dom);
	}
});