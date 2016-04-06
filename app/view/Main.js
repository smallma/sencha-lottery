Ext.define('lotterySencha.view.Main', {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.List',
        'lotterySencha.util.Lottery'
    ],

    xtype: 'mainView',

    config: {
        itemId: 'mainView',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toolbar',
                minHeight: 64,
                items: [
                    {
                        // style: [
                        //     'font: normal 20px courier`',
                        //     'color: white',
                        //     'margin-left: 10px !important'
                        // ],
                        cls: 'appTitle',
                        xtype: 'label',
                        html: 'Q-Lottery'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'btnRefresh',
                        iconCls: 'refresh'
                    }

                ]
            },
            {
                xtype: 'list',
                store: 'Jackpot',
                flex: 1,
                cls: 'jackpotList',
                disableSelection: true,
                itemHeight: 196,
                itemTpl: new Ext.XTemplate(
                    '<div>' +
                        '<div class="btnNotification"></div>' +
                        '<div class="drawName">{[this.genLotteryName(values.typeId)]}</div>' +
                        '<div class="money">{[this.convertUnit(values.money)]}</div>' +
                        '<div class="drawBalls">' +
                            '<div class="btnBefore fa fa-caret-left"></div>' +
                            '<div class="line">' +
                                '{[this.genWinningNumbers(values.winningNumbers)]}' +
                                '{[this.genSpecails(values.special)]}' +
                            '</div>' +
                            '<div class="latestDrawInfo">' +
                                '{[this.genIsoDate(values.drawDate.iso)]}, {drawNo}期' +
                            '</div>' +
                            '<div class="btnNext fa fa-caret-right"></div>' +
                        '</div>' +
                    '</div>',
                    {
                        convertUnit: function (money) {
                            var floatMoney = (money/100000000).toFixed(1);
                            var intMoney = parseInt((money/100000000).toFixed(1));

                            var calMoney = floatMoney > intMoney ? floatMoney : intMoney;

                            return calMoney + '億'; 
                            // return parseInt((money/100000000).toFixed(1)) + '億';
                        },
                        genLotteryName: function (typeId) {
                            var lotteryInfo = lotterySencha.util.Lottery.getLotteryInfo(parseInt(typeId));
                            console.log(lotteryInfo);
                            return lotteryInfo['name']
                        },
                        genWinningNumbers: function (winningNumbers) {
                            var balls = '';
                            Ext.Array.each(winningNumbers, function (number) {
                                balls = balls + '<div class="normalBall">' + number + '</div>';
                            })
                            return balls;
                        },
                        genSpecails: function (specials) {
                            var balls = '';
                            Ext.Array.each(specials, function (number) {
                                balls = balls + '<div class="specialBall">' + number + '</div>';
                            })
                            return balls;
                        },
                        genIsoDate: function (isoDate) {
                            // var years = new Date(isoDate).getFullYear();
                            // var month = new Date(isoDate).getMonth();
                            // var day = new Date(isoDate).getDate();
                            var dateTime = isoDate.split('T')[0].split('-');
                            return parseInt(dateTime[0]) + '/' + dateTime[1] + '/' + dateTime[2]
                        }
                    }
                )
            }
        ],
        listeners: [
            {
                delegate: '#btnRefresh',
                event: 'tap',
                fn: 'onTapBtnRefresh'
            }
        ]
    },
    onTapBtnRefresh: function () {
        var dom = this.query('button#btnRefresh')[0];
        this.fireEvent('tapBtnRefresh', dom);
        
        // Ext.getStore('Jackpot').fetch();
    }
});
