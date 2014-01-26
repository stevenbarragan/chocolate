if(Meteor.isClient){
  Template.message.writer = function(){
    return Meteor.users.findOne({_id: this.users[0]}).emails[0].address
  }
}
