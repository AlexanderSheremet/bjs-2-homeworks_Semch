// Задание №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(repState) {
    if (repState < 0) {
      this._state = 0;
    } else if (repState > 100) {
      this._state = 100;
    } else {
      this._state = repState;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

// Задание №2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice([i], 1)[0];
      }
    }
    return null;
  }
}
// Задание №3

class Students {
  constructor(name) {
    this.name = name;
    this.subjects = {};
  }
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) return "ошибка";
    if (this.subjects[subject] === undefined) {
      this.subjects[subject] = [mark];
    } else {
      this.subjects[subject].push(mark);
    }
  }
  getAverageBySubject(subject) {
    if (this.subjects[subject] === undefined) return "предмет отсутствует";
    let sum = 0;
    this.subjects[subject].forEach((item) => (sum = sum + item));
    return sum / this.subjects[subject].length;
  }
  getAverage() {
    let sumAdverage = 0;
    let subjects = Object.keys(this.subjects);
    subjects.forEach(
      (item) => (sumAdverage = sumAdverage + this.getAverageBySubject(item))
    );
    return sumAdverage / subjects.length;
  }
}
