if(Meteor.isClient){
  Template.message.writer = function(){
    if(this.users[0] == Meteor.userId()){
      return "You"
    }else{
      return Meteor.users.findOne({_id: this.users[0]}).emails[0].address
    }
  }
}
