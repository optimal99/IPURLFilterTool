function readTextFile(f, callback) {
  let reader = new FileReader();
  reader.readAsText(f);
  reader.onload = function() {
    callback(reader.result);
  };
}

window.onload = function() {
  let input = document.getElementById('input');
  
  input.onchange = function(e) {
    let files = e.target.files;
    readTextFile(files[0], function(text) {
      let readerText = text.valueOf();
      readerText.toLowerCase();
      let arrIP = readerText.split(" ");
      readerText = null;
      
      let count;
      let Scount = 1; // Same Count
      arrIP.sort();
      
      for(count = 0; count < arrIP.length; count++) {
        document.write(arrIP[count] + "<br />");
        if(arrIP[count] == arrIP[count + 1]) {
          while (arrIP[count] == arrIP[count + Scount]) {
            arrIP[count + Scount] = null;
            Scount++;
          }
          arrIP[count] = null;
          count = count + Scount - 1;
        }
      }
      
      files = null;
      count = null;
      Scount = null;
      arrIP = null;
    });
  };
  
  input = null;
}
