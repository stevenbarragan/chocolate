if(Meteor.isClient){
  Template.messages.messages = function(){
    users = Session.get('users')
    if(users){
      users.push(Meteor.userId())
      return Message.find({users: {$all: users}},{ limit: 10, sort: { created_at: -1}}).fetch().reverse()
    }
  }
}
