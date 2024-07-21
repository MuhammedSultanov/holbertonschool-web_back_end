export class HolbertonCourse {
  constructor(name, lenght, students) {
    this._name = '';
    this._lenght = 0;
    this._students = [];

    this.name = name;
    this.lenght = lenght;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(value) {
    if (typeof value === 'number') {
      this._lenght = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

export default HolbertonCourse;
