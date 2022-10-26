
import { Component, OnInit } from '@angular/core';
import { LIST_ARRAY} from 'src/app/utils/constant';
@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  forms = ["Form1", "Form2", "Form3"];
  status = ["Complete", "Incomplete", "Active"];
  lat: number = 10.0889;
  lng: number = 77.0595;
  zoom: number = 8;
  listArray:any;
  markers:any;

  constructor() { }

  ngOnInit(): void {
    this.listArray = LIST_ARRAY;
    
  }
}


