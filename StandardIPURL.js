function readTextFile(f, callback) {
  let reader = new FileReader();
  reader.readAsText(f);
  reader.onload = function() {
    callback(reader.result);
  };
}

window.onload = function() {
  let ipChanger = document.getElementById('ipChanger');
  let urlChanger = document.getElementById('urlChanger');
  let readerIP;
  let readerURL;
  let arrIP;
  let arrURL;
  let files;
  let i;
  
  ipChanger.onchange = function(e) {
    files = e.target.files;
    readTextFile(files[0], function(text) {
      readerIP = text.valueOf();
      arrIP = readerIP.split(" ");
      for (i = 0; i < arrIP.length; i++) {
        arrIP[i] = "any,any," + arrIP[i] + ",any,any";
        document.write(arrIP[i] + "<br />");
      }
    });
  }
  
  urlChanger.onchange = function(e) {
    files = e.target.files;
    readTextFile(files[0], function(text) {
      readerURL = text.valueOf();
      arrURL = readerURL.split(" ");
      for (i = 0; i < arrURL.length; i++) {
        arrURL[i] = ",>,,," + arrURL[i] + ",";
        document.write(arrURL[i] + "<br />");
      }
    });
  }
  
  readerIP = null;
  ipChanger = null;
  urlChanger = null;
  readerIP = null;
  readerURL = null;
  arrIP = null;
  arrURL = null;
  files = null;
  i = null;
}
