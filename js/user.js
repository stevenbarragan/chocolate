if(Meteor.isClient){
  Template.user.events({
    'click': function(event, template){
      Session.set('users', [this._id])
      $('.active').removeClass('active')
      $(template.find('a')).addClass('active')
    }
  })
}
