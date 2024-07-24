export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter((students) => students.location === city)
    .map((student) => {
      const gradeObj = newGrade
        .find((grade) => grade.studentId === student.id);
      return {
        ...students,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
