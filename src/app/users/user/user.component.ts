import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  constructor(public userService: UserService) {}

  roles = [
    {id: 1, value: 'DumbUser'},
    {id: 2, value: 'DumberUser'},
    {id: 3, value: 'Developer'}];

  ngOnInit() {}

  onClear(): void {
    this.userService.initializeForm();
    this.userService.form.reset();
  }

  setsome() {
    console.log('sdsd');
  }
}
