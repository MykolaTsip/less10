import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  count = 1;
  user: any[] = [];
  err = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  add(): void  {
    if (this.count <= 10) {
      this.userService.user(this.count)
        .subscribe(user => this.user.push(user));

      console.log(this.user);
      this.count++;
    } else {
      this.err = 'not found user';
    }

  }

  clear(): void  {
    this.user = [];
  }

}
