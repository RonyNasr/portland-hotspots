import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    showPostForm(){
    this.set('addNewPost', true);
    },
    savePost(){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        image: this.get('image'),
        category: this.get('category'),
        tags: this.get('tags')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
