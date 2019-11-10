import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string = 'No title';
  @Input() content: string = 'No content';
  @Input() loveIts: number = 0;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  addLike() {
    this.loveIts++;
  }
  subLike() {
    this.loveIts--;
  }
  getColor() {
    if(this.loveIts>0){
      return 'green';
    } else if(this.loveIts<0) {
      return 'red';
    } else {
      return 'black';
    }
  }

}
