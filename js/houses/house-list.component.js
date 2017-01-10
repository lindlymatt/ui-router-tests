(function () {
  'use strict'

  angular.module('app')
    .component('houseList', {
      controller: function (houseService) {
        const vm = this

        vm.$onInit = function () {
          vm.houses = houseService.houses
        }
      },
      template: `
        <h1>Houses</h1>

        <ul>
          <li ng-repeat="house in $ctrl.houses">
            <a href="/houses/{{house.id}}">{{house.name}}</a>
          </li>
        </ul>

        <a ui-sref="new">Add House</a>
      `
    })

}());
