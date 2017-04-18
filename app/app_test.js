describe('TabController', function() {
    beforeEach(module('tabApp'));

    var $scope, $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('TabController controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var $scope = {};
            var tabCtrl = $controller('TabController', { $scope: $scope });
            expect(tabCtrl).toBeDefined();
        }));

    });
});