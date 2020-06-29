import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  @Output() passwordvalue = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendvalue(inputvalue){
    this.passwordvalue.emit(inputvalue.target.value);
  }


}
