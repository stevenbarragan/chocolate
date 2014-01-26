var sendInputMessage = function(event, template){
  input = template.find('input.text')

  users = Session.get('users')
  users.push(Meteor.userId())

  Message.insert({text: input.value, create_at: Date.now(), users: users})

  input.value = ''
}

var get_messages = function(){
  users = Session.get('users')
  if(users){
    users.push(Meteor.userId())
    return Message.find({users: {$all: users}},{ limit: 10, sort: { create_at: -1}}).fetch().reverse()
  }
}

if (Meteor.isClient) {
  Template.dessert_table.messages = function(){
    return get_messages()
  }

  Template.dessert_table.events({
    'click button.add': function(event, template){
      sendInputMessage(event, template)
    },
    'keyup input.text': function(event, template){
      if(event.which == 13){
        sendInputMessage(event, template)
      }
    }
  })
}
