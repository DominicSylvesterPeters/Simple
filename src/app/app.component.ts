import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/http.service';
import { HttpDetailsService } from './service/httpDetails.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService, private httpDetails: HttpDetailsService) { }

  userData;
  userDetails;

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => {
      console.log(data);
      this.userData = data;
    })
  }

  getUserDetails(selectedUser) {
    this.httpDetails.getUserDetails(selectedUser).subscribe((details) => {
      this.userDetails = details;
    })
    console.log(this.userDetails)
  }
  refresh(){
    window.location.reload();
  }

}
