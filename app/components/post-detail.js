import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')){
        this.sendAction('destroyPost', post);
      }
    },
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post, params) {
      debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('post');
    },
    addComment(params){
      console.log(params);
      var newComment =  this.store.createRecord('comment',params);
      newComment.save().then(function(){
        this.post.get('comments').addObject(newComment);
      })
      this.transitionTo('post');
    }
  }
});
