if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Message.find().count() == 0){
      message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
      for( var i = 0; i < 5; i++){
        Message.insert({text: message, created_at: Date.now()})
      }
    }
  });
}
