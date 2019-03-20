import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(public timelineService: TimelineService) { }

  ngOnInit() {
  }

}
