import { Component, OnInit } from '@angular/core';
import { IUser, IUserWrapper } from 'src/app/interfaces/i-user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users: Array<IUser> = [];
  showMore: boolean = false;
  user: IUser = {} as IUser;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.onAll()
  } 

  onAll(): void{
    this.userService.all().subscribe(
      (response: IUserWrapper) => {
        this.users = response.users;
      }
    );
  }

  
  showToggle():void{
    this.showMore = !this.showMore;
  }

  showDetail(u: IUser): void{
    this.user=u;
  }


}
