function readTextFile(file, callback) {
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function() {
    callback(reader.result);
  };
}

window.onload = function() {
  let input = document.getElementById('input');
  
  input.onchange = function(event) {
    let file = event.target.files[0];
    readTextFile(file, function(text) {
      // 공백을 기준으로 IP 분리
      let ipAddresses = text.split(" ");
      
      // Set을 사용하여 중복 제거
      let uniqueIPs = [...new Set(ipAddresses)];
      
      // HTML 문자열을 미리 생성
      let resultHTML = uniqueIPs.filter(ip => ip).map(ip => `${ip} `).join('');
      
      // 한 번에 DOM에 출력
      document.write(resultHTML);
    });
  };
};
