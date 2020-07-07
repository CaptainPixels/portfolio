var trigger = false;
var firstDown = true;
AFRAME.registerComponent('trigger', {
  // schema: {
  //   color: {default: '#666'}
  // },
  init: function(){
    var data = this.data;
    this.el.addEventListener('triggerdown', function(){
      trigger = true;
    });
    this.el.addEventListener('triggerup', function(){
      trigger = false;
      firstDown = true;
    });
  }
});
