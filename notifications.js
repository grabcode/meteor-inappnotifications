InAppNotifs = {};

_deps = {
  notifs: new Tracker.Dependency()
}

InAppNotifs.stack = [];

InAppNotifs.config = function(options) {
  _.extend(this, {
    template: 'inappnotif'
  }, options);
  return this;
}

InAppNotifs.push = function(notif){
  var time  = new Date().getTime()
    , notif = _.extend({
    content : undefined,
    type    : 'success',
    time    : time,
    delay   : 1500
  }, notif);

  this.stack.push(notif);

  if(typeof notif.delay==='number'){

    _.delay(function(){

      var indexOfNotif = _.indexOf(_.pluck(InAppNotifs.stack, 'time'), time);
      if(indexOfNotif===-1){return;}

      InAppNotifs.stack.splice(indexOfNotif, 1);
      _deps.notifs.changed();

    }, notif.delay);

  }

  _deps.notifs.changed();

  return this;
}

Template.inappnotifs.helpers({
  tmpl: function() {
    return InAppNotifs.template;
  },
  notifs: function () {
    _deps.notifs.depend();
    return InAppNotifs.stack.reverse();
  }
});


Template.inappnotifs.onRendered( function(){

  var container = this.find(".inappnotifs");

  container._uihooks = {
    insertElement: function(node, next) {
      var $node = $(node);
      container.insertBefore(node, next);
      $node.animate({
        bottom: "0"
      }, 200);
    },
    removeElement: function(node) {
      $(node).animate({
        bottom: "-100px"
      }, 200, function() {
        $(this).remove();
      });
    }
  };

});
