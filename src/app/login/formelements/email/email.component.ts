import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  
  @Output() emailid = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendvalue(inputvalue){
    this.emailid.emit(inputvalue.target.value);
  }

}
