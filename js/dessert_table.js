var sendInputMessage = function(event, template){
  input = template.find('input.text')
  Message.insert({text: input.value, create_at: Date.now()})
  input.value = ''
}

if (Meteor.isClient) {
  Template.dessert_table.messages = function(){
    return Message.find({},{ limit: 10, sort: { create_at: -1}}).fetch().reverse()
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
