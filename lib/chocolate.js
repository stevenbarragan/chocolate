if (Meteor.isServer) {
  Meteor.startup(function () {});

  Meteor.publish("directory", function () {
    return Meteor.users.find({})
  });

  Accounts.onCreateUser(function(option, user){
    user.status = 'logged'
    return user
  })

  Meteor.users.allow({
    update: function(){
      return true
    }
  })
}
