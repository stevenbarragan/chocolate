Message = new Meteor.Collection('messages')

Message.allow({
  insert: function(){
    return true
  },
  update: function(){
    return true
  }
})

if (Meteor.isClient) {
  Meteor.subscribe("directory");

  Meteor.autorun(function(){
    if (Meteor.userId()){
      Session.set('userId', Meteor.userId())
      Meteor.users.update({_id: Meteor.userId()}, {$set: {status: 'logged'}})
    }else{
      Meteor.users.update({_id: Session.get('userId')}, {$set: {status: 'unlogged'}})
    }
  })
}
