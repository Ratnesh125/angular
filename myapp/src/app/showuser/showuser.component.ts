import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrls: ['./showuser.component.css']
})
export class ShowuserComponent {

 /* constructor(private service:MyserviceService)
  {}*/
  response:any
  data:any;
  async getData(){
    this.response=await fetch("http://localhost:3000/users")
    this.data=await this.response.json();
  }
}