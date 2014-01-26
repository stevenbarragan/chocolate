var sendInputMessage = function(event, template){
  input = template.find('input.text')

  users = []
  users.push(Meteor.userId())
  users = users.concat(Session.get('users'))

  data = {
    text: input.value,
    created_at: Date.now(),
    users: users
  }

  Message.insert(data)

  input.value = ''
}


if (Meteor.isClient) {
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
