//Задача №1
function parseCount(numberParse) {
  let result = Number.parseFloat(numberParse, 10);
  if (Number.isNaN(result)) {
    throw new Error("Невалидное значение");
  } else {
    return result;
  }
}

function validateCount(numberParse) {
  try {
    let result = parseCount(numberParse);
    return result;
  } catch (error) {
    return error;
  }
}

//Задача 2
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || b + c < a || c + a < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let s = this.perimeter / 2;
    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (err) {
    return {
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
      get area() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
