/**
 * The goal of this file is to provide the basic understanding of
 * 1. How to create CompositeView
 */

(function() {
  'use strict';

  var app = Marionette.Application.extend({});
  app = new app();

  /**
   * `employees` is an array collection of data object
   */
  var employees = [
    { empId: 1, empName: 'Ashwin' },
    { empId: 2, empName: 'Kumar' },
    { empId: 3, empName: 'Ajay' },
    { empId: 4, empName: 'Saju' },
    { empId: 5, empName: 'Jerin' }
  ];

  /**
   * Create a Backbone Model
   */
  var EmployeeModel = Backbone.Model.extend({});

  /**
   * Create a Backbone Collection and pass EmployeeModel for model reference
   */
  var EmployeeCollection = Backbone.Collection.extend({
    model: EmployeeModel
  });

  /**
   * Create an Marionette ItemView and will be passed to CompositeView as a childView
   * ItemView are used to hold a single Model
   */
  var EmployeeItemView = Marionette.ItemView.extend({
    tagName: "tr",

    template: '#employee-template'
  });

  /**
   * Create an Marionette CompositeView and will be pass `EmployeeItemView` as a childView
   * CompositeView are used to hold multiple models
   */
  var EmployeesCompositeView = Marionette.CompositeView.extend({
    initialize: function() {
      console.log("LOG: CompositeView got initialize!");
    },

    tagName: "table",

    /**
     * This must be a Backbone/Marionette view object definition, not an instance.
     *
     * Notes: If you do not specify a childView, an exception will be thrown
     * stating that you must specify a childView.
     */
    childView: EmployeeItemView,

    childViewContainer: "tbody",

    template: "#employee-table"
  });

  /**
   * Create an instance of Backbone Collection `EmployeeCollection` and pass `employees` data
   */
  var companyEmployees = new EmployeeCollection(employees);

  /**
   * Create an instance of Marionette CompositeView `EmployeesCompositeView` and pass the
   * above Collection instance to collection object
   */
  var companyEmployeesView = new EmployeesCompositeView({
    collection: companyEmployees
  });

  /**
   * Call render method and provide el reference and append it to container id
   */
  $("#container").append(companyEmployeesView.render().el);

  app.start();

})();
