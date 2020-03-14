import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup.service';
import {User} from '../User';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {

  accounts: User[];

  constructor(private accountService: SignupService) {

  }

  ngOnInit() {
    this.accountService.findAll().subscribe(data => {
      this.accounts = data;
      console.log(data);
    });
  }

}
