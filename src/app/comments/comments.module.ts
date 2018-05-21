import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentlistComponent } from './commentlist/commentlist.component';

@NgModule({
	imports: [ CommonModule, SharedModule ],
	declarations: [ CommentlistComponent ],
	exports: [ CommentlistComponent ]
})
export class CommentsModule {}
