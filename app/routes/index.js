import Ember from 'ember';

var posts = [{
  id:1,
  title: "Top 10 reasons to visit Portland",
  body: "One of the world's great towns for beer, weirdness, cheap food, funky neighbourhoods, forest hikes and much more, Portland is the kind of city you visit for two days and then move to. Endlessly entertaining and intriguing, it's easily walked and explored by bike and most locals will tell you the famous rain is merely a bonus. We've picked 10 reasons why you should already be planning your trip to Portland.",
  author: "Rony Nasr",
  image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2012/04/29326-54.jpg",
  category: "travel",
  tags: "travel, food, fun"
},{
  id:2,
  title: "Insider’s Guide to Portland",
  body: "Once considered the less exciting sibling of San Francisco and Seattle, Portland, Ore., has evolved into much more than just a city. Today, it is a utopian symbol of the possibilities of urban living in the 21st century—affordable, friendly, environmentally conscious and full of epicurean delights. One of the world's great towns for beer, weirdness, cheap food, funky neighbourhoods, forest hikes and much more, Portland is the kind of city you visit for two days and then move to. Endlessly entertaining and intriguing, it's easily walked and explored by bike and most locals will tell you the famous rain is merely a bonus. We've picked 10 reasons why you should already be planning your trip to Portland.",
  author: "Noah Yasskin",
  image: "https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2012/04/29326-28.jpg",
  category: "travel",
  tags: "travel, food, fun"
}]


export default Ember.Route.extend({
  model() {
   return posts;
 }
});
