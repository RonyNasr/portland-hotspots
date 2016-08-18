import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addComment(){
      var params= {
        content: this.get('content'),
         date: new Date()
      };
      this.sendAction('addComment', params)
    }
  }

});
