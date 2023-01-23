let sum = document.getElementById("sum");
let all = document.getElementById("all");

let small = document.querySelectorAll(".input-small");
let numbers = []; // Массив, куда запишутся все значения инпутов

for (let i = 0; i < small.length; i++) {
  numbers.push(small[i].value); // (*1)

  small[i].addEventListener("input", function () {
    numbers[i] = this.value;
    numbers[i] = this.value.replace(/[^\d]/g,'');
    if (numbers.length <= 0) {
      return numbers[i];
    } else {
      all.value = numbers.join(', ') //все введенные числа
    } 
    // При вводе чисел в любом инпуте, не будем пересобирать все значения,
    // а только изменим конкретный элемент массива.
    // this - указывает на инпут, в котором печатают (который запускает эту функцию)

    // Все значения в массиве обновлены, можно обновить и результаты:
    updateResults();
  });
}
updateResults();

/************/

function updateResults() {
  sum.value = sumArr(numbers);
  // all.value = numbers.join(', ') //все введенные числа

}
function sumArr(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    x += +arr[i]; // (*2)
  }
  let c = ((x / 4) * 2) - 180;
  if (c <= 0) {
    return 'Введите суммы'
  }
  return c;
}


