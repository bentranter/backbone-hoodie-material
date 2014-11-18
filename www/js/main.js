"use strict";

// Test Backbone.js / initialize Hoodie. You can add n URL aprams here for a remote Hoodie
Backbone.connect(); //creates a new hoodie at Backbone.hoodie

var Task = Backbone.Model.extend({
  // models must have a type. maps to type in hoodie store.
  type: 'task',
  defaults: {
    name: 'New Task'
  }
});

var TaskCollection = Backbone.Collection.extend({
  // if a collection has a model, the adapter will keep the collection
  // up to date with all the models in the local store, as well as remote events
  model: Task 
})

var task = new Task({
  name: 'laundry'
});

// task will be saved into the hoodie store
task.save();

var tasks = new TaskCollection();

// upon initialization, tasks will fetch() all Task models from the datastore.
// it'll find t and insert t in tasks.

var task2 = new Task({
  name: 'groceries'
});

task2.save();
// task2 will be saved into the hoodie store
// and will also be inserted into tasks

task.destroy();
// task will be deleted from the store
// and will be removed from tasks


(function($){
  $(function(){
  // PLugin initialization
    $('.tooltipped').tooltip();
    $('.dropdown-button').dropdown();
    $('.tab-demo').show().tabs();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip();
    $('.collapsible-accordion').collapsible();
    $('.collapsible-expandable').collapsible({"accordion": false});
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav();

    $('#toastTest').click(function() {
      toast('Toast test.', 3000);
    });
  }); // end of document ready
})(jQuery);