/* 인공지능 기초 2학기 수업 자료 목록 — 이 파일 하나만 고치면 첫 화면이 바뀝니다.
 *
 * 새 자료를 올렸을 때
 *   1) 해당 단원의 lessons 안에서 맞는 차시를 찾아 links에 한 줄 추가
 *        [종류, '보이는 이름', 주소]
 *      종류: course 코스웨어 · extra 추가자료 · lab 실습 · sheet 학습지 · form 질문폼 · eval 평가 · old 이전 자료
 *   2) 그 차시의 updated를 오늘 날짜(YYYY-MM-DD)로 바꾸면 「최근 업데이트」에 올라옵니다.
 *   새 차시는 { no, title, pages, links, updated } 묶음을 하나 더 넣으면 됩니다.
 *   하지 않은 차시는 skip: '이유'를 넣으면 흐리게 보입니다.
 *
 * 주소는 학생에게 준 주소 그대로(옮기지 않음). W = 이 사이트, Q = 질문폼 사이트.
 */
const W = 'https://ai-worksheets-two.vercel.app/';
const Q = 'https://aiquiz26.vercel.app/';
const E = Q + 'aibasics-semester2/aiquiz/';
const A = Q + 'aibasics-semester2/';
const F = id => Q + 'forms/' + id + '.html';

const UNITS = [
  {
    id: 'u1', n: 'Ⅰ', title: '인공지능의 이해', color: '#2f6fd0',
    lessons: [
      { no: '01', title: '인공지능의 개념과 특성', pages: '16~19쪽', links: [['extra', '1-1-1 추가자료', E + '1-1-1.html'], ['form', 'ai-01-1-1-1', F('ai-01-1-1-1')]] },
      { no: '02', title: '인공지능의 원리', pages: '20~23쪽', links: [['extra', '1-1-2 추가자료', E + '1-1-2.html'], ['form', 'ai-02-1-1-2', F('ai-02-1-1-2')]] },
      { no: '03', title: '인공지능의 문제 해결', pages: '24~25쪽', links: [['extra', '1-1-2 추가자료', E + '1-1-2.html'], ['form', 'ai-02-1-1-2-1', F('ai-02-1-1-2-1')]] },
      { no: '04', title: 'AI 역량기르기', pages: '26~27쪽', links: [['form', 'ai-03-1-1-3', F('ai-03-1-1-3')]] },
      { no: '05', title: '탐색을 활용한 문제 해결 ① 맹목적 탐색', pages: '28~35쪽', links: [['extra', '1-2-1 추가자료', E + '1-2-1.html'], ['form', 'ai-04-1-2-1', F('ai-04-1-2-1')]] },
      { no: '06', title: '탐색을 활용한 문제 해결 ② 정보 이용 탐색', pages: '36~41쪽', links: [['course', '정보이용 탐색 알고리즘 슬라이드', E + 'info-search-lesson.html'], ['extra', '정리본: 언덕 등반·최상 우선·A*', Q + 'forms/ai-04-1-2-1-info-search-slides.html'], ['extra', '1-2-2 추가자료', E + '1-2-2.html'], ['form', 'ai-04-1-2-1-1', F('ai-04-1-2-1-1')]] },
      { no: '07', title: '지식의 표현과 규칙 기반 사고', pages: '42~47쪽', links: [['extra', '1-2-4 추가자료', E + '1-2-4.html'], ['form', '07-1', F('07-1')], ['old', 'ai-05-1-2-2 (지식의 표현과 명제 논리)', F('ai-05-1-2-2')], ['old', 'ai-05-1-2-2-1 (술어 논리와 규칙 기반 구현)', F('ai-05-1-2-2-1')]] },
      { no: '08', title: '1단원 마무리', pages: '48~51쪽', links: [['extra', '1-2-3 추가자료', E + '1-2-3.html'], ['form', '08-1', F('08-1')], ['old', 'ai-06-1-2-3 (AI 역량기르기)', F('ai-06-1-2-3')], ['old', 'ai-07-u1-project (창의융합)', F('ai-07-u1-project')], ['old', 'ai-08-u1-summary (단원정리)', F('ai-08-u1-summary')]] },
    ]
  },
  {
    id: 'u2a', n: 'Ⅱ-1', title: '기계학습', color: '#1f9d74',
    lessons: [
      { no: '09', title: '기계학습과 문제 해결 과정', pages: '58~61쪽', links: [['extra', '2-1-1 추가자료', E + '2-1-1.html'], ['extra', '개념 지도(모델·알고리즘·학습 방식)', A + 'ml-concept-map.html'], ['form', 'ai-09-2-1-1', F('ai-09-2-1-1')]] },
      { no: '10', title: '데이터 수집 방법', pages: '62~63쪽', links: [['extra', '2-1-2 추가자료', E + '2-1-2.html'], ['form', 'ai-10-2-1-2', F('ai-10-2-1-2')], ['old', 'ai-10-2-1-2-2 (붓꽃 데이터 수집 실습)', F('ai-10-2-1-2-2')]] },
      { no: '11', title: '데이터 전처리 · 데이터 편향성', pages: '64쪽', links: [['extra', '2-1-5 데이터 전처리', E + '2-1-5.html'], ['extra', '3-2-2 데이터 편향성', E + '3-2-2.html'], ['form', 'ai-10-2-1-2-1', F('ai-10-2-1-2-1')]] },
      { no: '12', title: '데이터 전처리(2) (10~14)', pages: '64~73쪽', links: [['extra', '2-1-5 데이터 전처리', E + '2-1-5.html']] },
      { no: '(16)', skip: '코들 차시로 운영 안 함 · 노션 보관', title: '데이터 속성 구분과 통합', pages: '66~67쪽', links: [['extra', '2-1-3 추가자료', E + '2-1-3.html'], ['form', 'ai-11-2-1-3', F('ai-11-2-1-3')]] },
      { no: '(17)', skip: '코들 차시로 운영 안 함 · 노션 보관', title: '결측치와 이상치 처리', pages: '68~71쪽', links: [['extra', '2-1-5 추가자료', E + '2-1-5.html'], ['form', 'ai-11-2-1-3-1', F('ai-11-2-1-3-1')]] },
      { no: '(18)', skip: '코들 차시로 운영 안 함 · 노션 보관', title: '핵심 속성 추출', pages: '72~73쪽', links: [['extra', '2-1-4 핵심 속성 찾기(산점도·히트맵)', E + '2-1-4.html'], ['form', 'ai-11-2-1-3-2', F('ai-11-2-1-3-2')]] },
      { no: '13', title: '기계학습의 3가지 유형', pages: '74쪽', links: [['extra', '2-1-6 추가자료', E + '2-1-6.html'], ['extra', '알고리즘 지도(5개 비교)', A + 'ml-algorithms.html'], ['form', 'ai-12-2-1-4', F('ai-12-2-1-4')]] },
      { no: '(20)', skip: '코들 차시로 운영 안 함 · 노션 보관', title: 'k-최근접 이웃 알고리즘', pages: '75쪽', links: [['extra', '분류 모델 4가지 쉬운 가이드', A + 'classification-models-easy-guide.html'], ['form', 'ai-12-2-1-4-1', F('ai-12-2-1-4-1')]] },
      { no: '14', title: '모델 학습과 성능 평가', pages: '76~81쪽', links: [['extra', '2-1-7 추가자료', E + '2-1-7.html'], ['form', 'ai-13-2-1-5', F('ai-13-2-1-5')]] },
      { no: '15', title: '기계학습 알고리즘', pages: '82~85쪽', links: [['extra', '알고리즘 지도', A + 'ml-algorithms.html'], ['lab', '실습: 대출 승인 여부 분류', E + 'practice/loan-approval.html'], ['lab', '실습: 음악 취향 군집화', E + 'practice/music-cluster.html'], ['lab', '실습: 이상거래 탐지', E + 'practice/fraud-detection.html'], ['form', 'ai-13-2-1-5-1 (과제1 야구부)', F('ai-13-2-1-5-1')]] },
      { no: '15', title: '선형 회귀 알고리즘 실습', pages: '86~87쪽', links: [['lab', '실습: 운동 시간과 소모 칼로리 예측', E + 'practice/exercise-calories.html'], ['lab', '실습: 최고기온과 전력 소비량 예측', E + 'practice/temp-electricity.html'], ['form', 'ai-13-2-1-5-2 (과제2 붓꽃 선형회귀)', F('ai-13-2-1-5-2')]] },
      { no: '(24)', title: 'AI 역량기르기', pages: '88~89쪽', skip: '수행평가① 실시 차시로 전환 · 노션 보관', links: [['form', 'ai-14-2-1-6', F('ai-14-2-1-6')]] },
      { no: '15-1·2', title: '수행평가 연습 · 1차 수행평가', pages: '', links: [['eval', '1차 수행평가 · 데이터 전처리와 모델 분석', A + 'assessment-lab.html'], ['eval', '수행평가 연습 · 붓꽃', A + 'iris_test.html'], ['eval', '수행평가 연습 · 타이타닉', A + 'titanic_test.html'], ['eval', '파이썬 실습 데모(붙여넣기 차단)', A + 'pylab-demo.html']] },
    ]
  },
  {
    id: 'u2b', n: 'Ⅱ-2', title: '딥러닝과 인공지능 서비스', color: '#9b4fc4',
    lessons: [
      { no: '16-1', title: '딥러닝 1차시: 퍼셉트론·조정·신경망 구조', pages: '90~92쪽', updated: '2026-10-25', links: [['course', '딥러닝 수업 메뉴', W + 'deep-learning/'], ['course', '수업 페이지 01~03', W + 'deep-learning/lesson.html#p1'], ['sheet', '개념 정리 학습지', W + 'deep-learning/worksheet.html'], ['extra', '2-2-1 추가자료', E + '2-2-1.html'], ['form', 'ai-15-2-2-1', F('ai-15-2-2-1')]] },
      { no: '16-2', title: '딥러닝 2차시: 활성화 함수·학습 과정·손실 함수', pages: '92~94쪽', updated: '2026-10-25', links: [['course', '수업 페이지 04~06', W + 'deep-learning/lesson.html#p4'], ['form', 'ai-15-dl-2', F('ai-15-dl-2')], ['old', 'ai-15-2-2-1-1 (딥러닝의 학습)', F('ai-15-2-2-1-1')]] },
      { no: '16-3', title: '딥러닝 3차시: 경사 하강법·배치와 에포크·정리', pages: '93~94쪽', updated: '2026-10-25', links: [['course', '수업 페이지 07~09', W + 'deep-learning/lesson.html#p7'], ['form', 'ai-15-dl-3', F('ai-15-dl-3')]] },
      { no: '17', title: '딥러닝과 기계학습 알고리즘: ML4Kids 손글씨 → 파이썬 MNIST', pages: '96~101쪽', updated: '2026-10-25', links: [['lab', 'ML4Kids 손글씨 숫자 학습', W + 'tm-digits/'], ['lab', 'MNIST 노트북(코랩)', W + 'tm-digits/mnist-classification-tm.ipynb'], ['form', 'ai-15-2-2-1-2', F('ai-15-2-2-1-2')]] },
      { no: '18', title: '컴퓨터 비전', pages: '102~109쪽', updated: '2026-11-03', links: [['course', '컴퓨터 비전 수업 페이지', W + 'computer-vision/'], ['extra', '2-2-2 추가자료', E + '2-2-2.html'], ['lab', '실습: 마스크 착용 여부 분류', E + 'practice/mask-detection.html'], ['lab', '실습: 분리수거 자동 분류', E + 'practice/recycling-sort.html'], ['form', 'ai-16-2-2-2', F('ai-16-2-2-2')]] },
      { no: '19', title: '음성 인식', pages: '110~113쪽', updated: '2026-11-03', links: [['course', '음성 인식 수업 페이지', W + 'speech-recognition/'], ['extra', '2-2-3 추가자료', E + '2-2-3.html'], ['form', 'ai-17-2-2-3', F('ai-17-2-2-3')]] },
      { no: '20', title: '자연어 처리', pages: '114~119쪽', updated: '2026-11-08', links: [['course', '자연어 처리 수업 페이지', W + 'natural-language-processing/'], ['form', 'ai-18-2-2-4', F('ai-18-2-2-4')]] },
      { no: '21', title: '2단원 정리 (AI 역량기르기 · 2단원 총정리)', pages: '120~121쪽', updated: '2026-11-10', links: [['course', '2단원 총정리 · AI 역량 키우기', W + 'unit2-review/'], ['form', 'ai-19-2-2-5', F('ai-19-2-2-5')]] },
      { no: '(32)', title: '창의융합프로젝트', pages: '122~125쪽', skip: '미실시 · 노션 보관', links: [['form', 'ai-20-u2-project', F('ai-20-u2-project')]] },
      { no: '(33)', title: '마무리 (직업소개, 단원정리)', pages: '126~127쪽', skip: '미실시 · 노션 보관', links: [['form', 'ai-21-u2-summary', F('ai-21-u2-summary')]] },
      { no: '학습지', title: '딥러닝 차시별 학습지 (A4 7장)', pages: '90~127쪽', links: [['sheet', '차시별 학습지 전체', W + 'lesson-worksheets.html']] },
    ]
  },
  {
    id: 'u3', n: 'Ⅲ', title: '인공지능의 사회적 영향', color: '#e0702b',
    note: '3차시로 압축 운영(22~24차시). 이론은 짧게, 생각 정리 과제 중심.',
    lessons: [
      { no: '22', title: '인공지능과 사회 변화 · 진로', pages: '132~145쪽', updated: '2026-11-10', links: [['course', '수업 페이지', W + 'ai-and-society/'], ['extra', '3-1-1 추가자료', E + '3-1-1.html'], ['extra', '3-1-2 사회적 문제 해결', E + '3-1-2.html'], ['extra', '3-1-3 인공지능과 진로', E + '3-1-3.html'], ['form', 'ai-22-3-1-1', F('ai-22-3-1-1')]] },
      { no: '23', title: '공존 · 편향 · 딜레마', pages: '146~155쪽', updated: '2026-11-10', links: [['course', '수업 페이지', W + 'ai-coexistence-bias/'], ['extra', '3-2-1 공존', E + '3-2-1.html'], ['extra', '3-2-2 데이터 편향성', E + '3-2-2.html'], ['extra', '3-2-3 윤리적 딜레마', E + '3-2-3.html'], ['form', 'ai-23-3-1-2', F('ai-23-3-1-2')]] },
      { no: '24', title: '사회적 책임 · 3단원 정리', pages: '156~165쪽', updated: '2026-11-10', links: [['course', '수업 페이지', W + 'ai-responsibility/'], ['extra', '3-2-4 사회적 책임과 공정성', E + '3-2-4.html'], ['form', 'ai-24-3-1-3', F('ai-24-3-1-3')]] },
      { no: '—', title: '하지 않는 원래 차시 질문폼 (배포만 유지)', pages: '146~165쪽', skip: '22~24차시에 통합 · 노션 보관', links: [['old', 'ai-25 인간과 인공지능의 공존', F('ai-25-3-2-1')], ['old', 'ai-26 편향과 딜레마', F('ai-26-3-2-2')], ['old', 'ai-27 사회적 책임', F('ai-27-3-2-3')], ['old', 'ai-28 AI 역량기르기', F('ai-28-3-2-5')], ['old', 'ai-29 창의융합', F('ai-29-u3-project')], ['old', 'ai-30 마무리', F('ai-30-u3-summary')]] },
    ]
  },
  {
    id: 'u4', n: 'Ⅳ', title: '인공지능 프로젝트', color: '#d64535',
    note: '수행평가② 전에 사전 수업 2차시(25 안내·문제 정의, 26 ML4Kids 과정 연습) → 수행평가 27·28 → 29 공통 마무리·현장 서술. 수업 시간에만 수행(활동지 걷기, 화면 캡처).',
    lessons: [
      { no: '25', title: '수행평가 안내 · 문제 정의(SDGs)', pages: '170~177쪽', updated: '2026-11-10', links: [['eval', '수행평가 안내', Q + 'assessment.html'], ['extra', '4-1-1 프로젝트 주제 선정', E + '4-1-1.html'], ['extra', '4-1-2 인공지능으로 해결할 수 있는 문제', E + '4-1-2.html'], ['form', 'ai-31-4-1-1 (질문 교체 예정)', F('ai-31-4-1-1')]] },
      { no: '26', title: 'ML4Kids 프로젝트 과정 연습', pages: '178~189쪽', updated: '2026-11-10', links: [['extra', '4-1-3 프로젝트 계획 세우기', E + '4-1-3.html'], ['form', 'ai-32-4-1-2 (질문 교체 예정)', F('ai-32-4-1-2')]] },
      { no: '27', title: '[수행②] ① 계획 · 데이터 · 학습 · 테스트', pages: '', links: [['eval', '수행평가 안내', Q + 'assessment.html']] },
      { no: '28', title: '[수행②] ② 개선 · 전후 비교 · 피드백 · Scratch', pages: '', links: [['eval', '수행평가 안내', Q + 'assessment.html']] },
      { no: '29', title: '[수행②] 마무리 · 제출 · 현장 서술', pages: '', links: [['eval', '수행평가 안내', Q + 'assessment.html']] },
      { no: '45', skip: '수행② 끝난 뒤 진행 여부·차시 다시 정함', title: '정형 데이터 프로젝트 ① 문제 정의와 데이터 준비', pages: '190~195쪽', links: [['form', 'ai-33-4-2', F('ai-33-4-2')]] },
      { no: '46', skip: '수행② 끝난 뒤 진행 여부·차시 다시 정함', title: '정형 데이터 프로젝트 ② 모델 학습과 성능 개선', pages: '196~201쪽', links: [['form', 'ai-33-4-2-1', F('ai-33-4-2-1')]] },
      { no: '47', skip: '수행② 끝난 뒤 진행 여부·차시 다시 정함', title: '비정형 데이터 프로젝트 ① 산불 이미지 분류', pages: '202~213쪽', links: [['form', 'ai-34-4-3', F('ai-34-4-3')]] },
      { no: '48', skip: '수행② 끝난 뒤 진행 여부·차시 다시 정함', title: '비정형 데이터 프로젝트 ② 데이터 편향성 해결', pages: '214~217쪽', links: [['form', 'ai-34-4-3-1', F('ai-34-4-3-1')]] },
      { no: '49', skip: '수행② 끝난 뒤 차시 다시 정함', title: '마무리 (직업소개, 단원정리)', pages: '218~219쪽', links: [['form', 'ai-35-u4-summary', F('ai-35-u4-summary')]] },
    ]
  },
];

/* 단원과 상관없이 자주 여는 곳 */
const COMMON = [
  ['form', '질문폼 전체 목록', Q + 'forms.html'],
  ['lab', '실습 노트북 목록(코랩)', A + 'notebooks.html'],
  ['extra', '차시별 추가 정리자료 허브', A + 'index.html'],
  ['extra', '추가자료 HTML 모음', E + 'index.html'],
  ['extra', '쉬운 설명 정리본 목록', Q + 'summary-index.html'],
  ['eval', '수행평가 안내', Q + 'assessment.html'],
  ['eval', '수행평가 연습(타이타닉·붓꽃) 사이트', 'https://sweet1203.github.io/ai-practice-lab/'],
  ['extra', '질문폼 사이트 첫 화면', Q],
];
