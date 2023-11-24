import { Component, OnInit } from '@angular/core';
import { Course, CoursesService } from 'src/app/courses.service';
import {animate, style, transition, trigger, query, stagger} from "@angular/animations";


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  animations: [

    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('50ms', animate('300ms ease-in', style({ opacity: 1 }))),
        ], { optional: true })
      ])
    ]),
  ]
})
export class CertificatesComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  topics: string[] = [
    'Cybersecurity', 'Drug Development', 'Machine Learning',
    'Artificial Intelligence', 'Programming', 'Cloud Computing',
    'Bioinformatics', 'Medicine'
  ];
  currentPage: number = 1;
  pageSize: number = 25;
  activeTags: string[] = []; // To store active tags
  selectedTopic: string | null = null; // To store the selected topic for highlighting


  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.coursesService.getCourses(this.currentPage, this.pageSize, this.activeTags)
      .subscribe(data => {
        this.courses = data;
        this.filteredCourses = data;
      });
  }

  filterByTopic(topic: string) {
    this.activeTags = topic === 'All' ? [] : [topic];
    this.currentPage = 1; // Reset to the first page
    this.selectedTopic = topic !== 'All' ? topic : null; // Set or reset the selected topic
    this.fetchCourses();
  }


  changePage(change: number) {
    const newPage = this.currentPage + change;
    if (newPage >= 1) {
      this.currentPage = newPage;
      this.fetchCourses();
    }
  }
  resetFilter() {
    this.activeTags = [];
    this.selectedTopic = null; // Clear the selected topic
    this.currentPage = 1; // Reset to the first page
    this.fetchCourses();
  }

  // Additional method to check if the "Next" button should be disabled
  isNextDisabled(): boolean {
    return this.filteredCourses.length < this.pageSize;
  }
}
