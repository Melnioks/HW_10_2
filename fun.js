function lookForBestStudent(ar) {
  let goal = ar[0];
  let max = ar[0].score;

  ar.forEach((element) => {
    if (element.score >= max && element.date < goal.date) {
        max = element.score;
        goal = element;
    }
  });
  console.log(
    `Лучший результат: ${max} у студента ${goal.name} - поздравляем!`
  );
  return goal.name;
}

module.exports = lookForBestStudent;

