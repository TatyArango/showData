import { Observable } from 'rxjs';
import { ResourseService } from './../../shared/resourse.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-commentlist',
	templateUrl: './commentlist.component.html',
	styleUrls: [ './commentlist.component.scss' ]
})
export class CommentlistComponent implements OnInit {
	constructor(private resourseService: ResourseService) {}
	url = 'http://jsonplaceholder.typicode.com/comments';
	comments$: Observable<any> = this.resourseService.getResource(this.url, 'body');

	ngOnInit() {}
}
