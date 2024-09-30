# IPURLFilterTool
### 개발 목적: IP 또는 URL이 담긴 텍스트 파일의 중복을 필터링한 뒤, 포맷팅하여 결과를 출력하는 도구 개발

### 개발 기간: 2021.08. ~ 2021.08. (3주)

### 플랫폼: Web

### 개발 인원: 1명

### 사용 기술: HTML, JavaScript

### 실행 순서
1. IP 또는 URL이 담긴 텍스트 파일을 준비합니다.
2. NOTEPAD++에서 편집 - 공백 기능 - 불필요한 공백 및 줄의 끝문자(EOL) 제거 실행
3. `IPURLFilter`에 파일을 첨부하고 결과를 저장합니다.
4. `StandardIPURL`에 파일을 첨부하고 결과를 저장합니다.


### 기능
1. `IPURLFilter`: IP 또는 URL이 담긴 텍스트 파일의 중복 제거
2. `StandardIPURL`: IP 또는 URL이 담긴 텍스트 파일의 포맷팅


### 성능 개선
- `IPURLFilter`: 4750ms -> 1356ms (71.5% 성능 개선)
- `StandardIPURL`: 7736ms -> 6525ms (15.7% 성능 개선)
