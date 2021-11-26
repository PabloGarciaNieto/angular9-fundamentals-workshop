import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent {
  @Input() title;
  @Input() courseLessons;
  @Output() selected = new EventEmitter();
}
