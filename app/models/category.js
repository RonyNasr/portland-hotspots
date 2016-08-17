import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  posts: DS.hasMany('post', {async: true}),
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var category = params.category;
      category.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    }
  }
});
