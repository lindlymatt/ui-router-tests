(function () {
  'use strict'

  angular.module('app')
    .component('houseShow', {
      controller: function (houseService, $stateParams) {
        const vm = this

        vm.$onInit = function () {
          // TODO: figure out how to pull the house id from the URL
          const houseId = $stateParams.houseId || 'No ID available.';
          vm.house = houseService.findById(houseId)
        }

      },
      template: `
        <h1>{{$ctrl.house.name}}</h1>

        <p>{{$ctrl.house.address}}</p>

        <a ui-sref="home">Return Home</a>
      `
    })

}());
