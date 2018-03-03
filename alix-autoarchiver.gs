function alixarchivr() {
  var threads = GmailApp.search('in:inbox label:aliexpress is:unread'); // serch unread
  if (threads.length>0){
    for (var i=threads.length-1;i>-1;i--){
      var sub = threads[i].getMessages()[0].getSubject();
      var num = sub.replace(/\D/g,"");
      var t = GmailApp.search('in:inbox label:aliexpress is:read subject:' + num);
      Logger.log('new mail: ' + sub);
      Logger.log(t.length);
      for (var j=0;j<t.length;j++){
        var m = t[j].getMessages()[0];
        t[j].markRead();
        t[j].moveToArchive();
        Logger.log('archived: ' + t[j].getMessages()[0].getSubject());
      }
      threads[i].markRead();
    }
  } else {                            // be not
    Logger.log('no new unread mail');  // do
  }
}

