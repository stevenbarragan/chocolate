if (Meteor.isClient) {
  Template.users.users = function(){
    return Meteor.users.find({})
  }
}
