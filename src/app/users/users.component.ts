import { Component, OnInit, Optional } from '@angular/core';
import { DataService } from './../services'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private _needLogIn: boolean;
  private _userName: '';

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this._needLogIn = true;
  }

  onRegister(inputLogin, inputPass: HTMLInputElement) {
    if ((inputLogin.value != '') && (inputPass.value != '')) {
      this.dataService.setDataToLocal(inputLogin.value, inputPass.value);
    alert('registered successfully');
    }
  }

  onLogin(inputLogin, inputPass: HTMLInputElement) {
    if (this.checkUser(inputLogin.value, inputPass.value)) {
        this._needLogIn = false;
        this._userName = inputLogin.value;
    }
  }

  checkUser(aLogin, aPass: string): boolean {
      if ( this.dataService.getDataFromLocal(aLogin) == aPass) {
        return true;
      } else { return false };
  }

}
