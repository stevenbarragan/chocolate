Message = new Meteor.Collection('messages')

Message.allow({
  insert: function(){
    return true
  }
})

if (Meteor.isServer){
  Meteor.publish("directory", function () {
    return Meteor.users.find({}, {fields: {emails: 1, profile: 1}});
  });
}

if (Meteor.isClient) {
  Meteor.subscribe("directory");
}
