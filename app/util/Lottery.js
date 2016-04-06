Ext.define('lotterySencha.util.Lottery', {
	extend: 'Ext.data.Model',

	singleton: true,
	attrs: {
		lotteryType: [
		  {
		    'typeId': 1,
		    'name': 'BINGO BINGO',
		    'order': 9,
		    'rules': [
		      {
		        'name': '一般區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 80,
		        'maxSelected': 10
		      },
		      {
		        'name': '超級獎號',
		        'type': 'special',
		        'minRange': 1,
		        'maxRange': 80,
		        'maxSelected': 1
		      }
		    ]
		  },
		  {
		    'typeId': 2,
		    'name': '威力彩',
		    'order': 2,
		    'rules': [
		      {
		        'name': '第一區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 38,
		        'maxSelected': 6
		      },
		      {
		        'name': '第二區',
		        'type': 'special',
		        'minRange': 1,
		        'maxRange': 8,
		        'maxSelected': 1
		      }
		    ]
		  },
		  {
		    'typeId': 3,
		    'name': '38樂合彩',
		    'order': 3,
		    'rules': [
		      {
		        'name': '一般區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 38,
		        'maxSelected': 5
		      }
		    ]
		  },
		  {
		    'typeId': 4,
		    'name': '大樂透',
		    'order': 1,
		    'rules': [
		      {
		        'name': '一般區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 49,
		        'maxSelected': 6
		      }
		    ]
		  },
		  {
		    'typeId': 5,
		    'name': '49樂合彩',
		    'order': 4,
		    'rules': [
		      {
		        'name': '一般區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 49,
		        'maxSelected': 4
		      }
		    ]

		  },
		  {
		    'typeId': 6,
		    'name': '今彩539',
		    'order': 5,
		    'rules': [
		      {
		        'name': '一般區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 39,
		        'maxSelected': 5
		      }
		    ]
		  },
		  {
		    'typeId': 7,
		    'name': '39樂合彩',
		    'order': 6,
		    'rules': [
		      {
		        'name': '一般區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 39,
		        'maxSelected': 4
		      },
		    ]
		  },
		  {
		    'typeId': 8,
		    'name': '三星彩',
		    'order': 7,
		    'rules': [
		      {
		        'name': '百位',
		        'type': 'hundred',
		        'minRange': 0,
		        'maxRange': 9,
		        'maxSelected': 1
		      },
		      {
		        'name': '十位',
		        'type': 'ten',
		        'minRange': 0,
		        'maxRange': 9,
		        'maxSelected': 1
		      },
		      {
		        'name': '個位',
		        'type': 'one',
		        'minRange': 0,
		        'maxRange': 9,
		        'maxSelected': 1
		      },
		    ]
		  },
		  {
		    'typeId': 9,
		    'name': '四星彩',
		    'order': 8,
		    'rules': [
		      {
		        'name': '千位',
		        'type': 'thousand',
		        'minRange': 0,
		        'maxRange': 9,
		        'maxSelected': 1
		      },
		      {
		        'name': '百位',
		        'type': 'hundred',
		        'minRange': 0,
		        'maxRange': 9,
		        'maxSelected': 1
		      },
		      {
		        'name': '十位',
		        'type': 'ten',
		        'minRange': 0,
		        'maxRange': 9,
		        'maxSelected': 1
		      },
		      {
		        'name': '個位',
		        'type': 'one',
		        'minRange': 0,
		        'maxRange': 9,
		        'maxSelected': 1
		      },
		    ]
		  },
		  {
		    'typeId': 10,
		    'name': '大福彩',
		    'order': 9,
		    'rules':[
		      {
		        'name': '一般區',
		        'type': 'normal',
		        'minRange': 1,
		        'maxRange': 40,
		        'maxSelected': 7
		      }
		    ]
		  }
		]
	},
	getLotteryInfo: function (typeId) {
		var lotteryInfo = Ext.Array.filter(this.attrs.lotteryType, function (record) {
			return record.typeId === typeId;
		})
		return lotteryInfo && lotteryInfo[0];
	}
});