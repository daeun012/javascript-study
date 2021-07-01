function getGrade(score) {
  let grade;

  if (score <= 5) {
    grade = 'F';
  } else if (score <= 10) {
    grade = 'E';
  } else if (score <= 15) {
    grade = 'D';
  } else if (score <= 20) {
    grade = 'C';
  } else if (score <= 25) {
    grade = 'B';
  } else grade = 'A';

  return grade;
}

// 좀 더 간단한 방법
function getGrade(score) {
  return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
}

function getGrade(score) {
  return 'FFEDCBA'[Math.ceil(score / 5.0)];
}
