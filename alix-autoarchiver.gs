function serchnewshipped() {
  var shippedthreads = GmailApp.search('in:inbox label:aliexpress subject:shipped is:unread');
  if ( shippedthreads.length > 0 ) {  // be
    goto(shippedthreads);               // do
  } else {                            // be not
    Logger.log('no new shipped mail');  // do
  }
}

function goto(t) {
  for (var i=0;i<t.length;i++) {
    var nummel = t[i].getMessages()[0].getSubject().replace(/\D/g,""); // num1
    var paidthreads = GmailApp.search('in:inbox label:aliexpress subject:paid ' + nummel);
    if ( paidthreads.length > 0 ) {
      paidthreads[0].moveToArchive();
      Logger.log('archived' + paidthreads[0].getMessages()[0].getSubject());
      t[i].getMessages()[0].markRead();
      Logger.log('markRead' + t[i].getMessages()[0].getSubject());
    }
  }
}
