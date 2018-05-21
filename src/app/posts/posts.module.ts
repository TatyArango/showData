import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist/postlist.component';

@NgModule({
	imports: [ CommonModule, SharedModule ],
	declarations: [ PostlistComponent ],
	exports: [ PostlistComponent ]
})
export class PostsModule {}
