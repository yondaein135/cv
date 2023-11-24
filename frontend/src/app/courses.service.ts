import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tag {
  id: number;
  name: string;
}

export interface Course {
  Id: number;
  Title: string;
  IssuingInstitution: string;
  Hours: number;
  Creator: string;
  Tags: Tag[];
  Type: string;
  VerificationLink: string;
}



@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getCourses(page: number, pageSize: number, tags: string[]): Observable<Course[]> {
    let params = `?page=${page}&pageSize=${pageSize}`;
    if (tags.length) {
      params += `&tags=${tags.join(',')}`;
    }
    return this.http.get<Course[]>(`${this.apiUrl}/courses${params}`);
  }
}
