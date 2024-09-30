function readTextFile(file, callback) {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    callback(reader.result);
  };
}

window.onload = function() {
  let ipChanger = document.getElementById('ipChanger');
  let urlChanger = document.getElementById('urlChanger');
  
  // 공통 처리 함수
  function processFile(inputElement, prefix, suffix) {
    inputElement.onchange = function(e) {
      let files = e.target.files;
      readTextFile(files[0], function(text) {
        let arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
          arr[i] = prefix + arr[i] + suffix;
          document.write(arr[i] + "<br />"); // 개선 가능: DOM에 직접 추가하도록 변경하는 것이 좋음
        }
      });
    };
  }
  
  // IP 파일 처리
  processFile(ipChanger, "any,any,", ",any,any");
  
  // URL 파일 처리
  processFile(urlChanger, ",>,,,", ",");
};
