import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash ({
      post: this.store.find('post', params.post_id);
      comments: this.store.findAll('comment');
    });
    // return this.store.find('post', params.post_id);
  },
  actions: {
    destroyPost(post){
      post.destroyRecord();
      this.transitionTo('index');
    }
  }
});
