if(Meteor.isClient){
  Template.user.events({
    'click': function(event, template){
      Session.set('users', [this._id])
    }
  })

  Template.user.active = function(){
    users = Session.get('users')
    if(users && this._id == users[0]){
      return 'active'
    }
  }

  Template.user.nickname = function(){
    if(this.services.facebook != undefined){
      console.log(this)
      return this.services.facebook.name
    }
    return this.emails[0].address
  }
}
