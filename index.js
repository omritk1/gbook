const mongoose = require('mongoose'); //inporting mongoose

mongoose.connect('mongodb://localhost/gbookDB');//connection to the BD

const Comment = mongoose.model('Comment', { name: String, email: String, timestamp:Date, comtent:String,});

const comment = new Comment({ name: 'omri', email: 'omri@gmai.com', comtent:'This is a test', });
comment.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    Comment.find((err, comments) => {
      if (err){
        console.log(err);
      }
      else {
        console.log(comments);
      }
    });
  }
});
