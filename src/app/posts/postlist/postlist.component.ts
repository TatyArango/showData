import { Observable } from 'rxjs';
import { ResourseService } from './../../shared/resourse.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-postlist',
	templateUrl: './postlist.component.html',
	styleUrls: [ './postlist.component.scss' ]
})
export class PostlistComponent implements OnInit {
	constructor(private resourseService: ResourseService) {}

	url = 'http://jsonplaceholder.typicode.com/posts';
	posts$: Observable<any> = this.resourseService.getResource(this.url, 'title');
	// poner el tipo observable en la variable post$ con la interface

	ngOnInit() {}
}
