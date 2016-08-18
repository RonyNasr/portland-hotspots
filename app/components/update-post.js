import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
        var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        image: this.get('image'),
        category: this.get('category'),
        tags: this.get('tags')
      };
      this.set('updatePostForm', false);
      console.log("sendAction");
      this.sendAction('update', post, params);
    }
  }
});
