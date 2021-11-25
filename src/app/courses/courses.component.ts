import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
 
  selectedCourse = undefined;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: undefined,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }
  removeCourse(course: any) {
    this.courses.forEach((e, index) => {
      if (e.id === course.id) {
        this.courses.splice(index, 1);
        if (this.selectedCourse.id === e.id)
        this.cancel();
      }
    })
  }
  cancel() {
    this.resetSelectedCourse();
  }
  saveCourse() {
    console.log('submited course', this.selectedCourse)
  }
}
