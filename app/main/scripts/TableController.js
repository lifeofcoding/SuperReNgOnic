(function() {
    'use strict';

    angular.module('main')

    .controller('TableController', function(supersonic) {
        var _this = this;

        supersonic.logger.debug('TableController Loaded!!');
        supersonic.logger.warn('TableController Loaded!!');
        supersonic.logger.info('TableController Loaded!!');
        supersonic.logger.error('TableController Loaded!!');

        angular.extend(this, {
            init: function() {
                for (var i = 0, len = 1000; i < len; ++i) {
                    this.model.data.push({name:'Name' + i});
                }
            },
            model: {
                data: [],
                rows: 3
            },
            person: {},
            shuffle: function(array) {
                var currentIndex = array.length, temporaryValue, randomIndex;

                // While there remain elements to shuffle...
                while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            },
            newName: function(person) {
                _this.model.data.push(angular.copy(person));
                _this.person = {};
            },
            shuffleData: function() {
                _this.model.data = _this.shuffle(_this.model.data);
            }
        });

        this.init();
    })
    .directive('reactTable', function(reactDirective) {
        return reactDirective(Table);
    });

})();
