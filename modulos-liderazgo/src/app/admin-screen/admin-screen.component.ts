import { Component, OnInit } from '@angular/core';
import { AllreportsFetchService } from '../allreports-fetch.service';
import { AllusersFetchService } from '../allusers-fetch.service';


@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit {
  users: any[] = []

  constructor(private allUsersService: AllusersFetchService, private allReportsService: AllreportsFetchService) { }

  getAllUsers(): any {
  		console.log(this.allUsersService)
		return this.allUsersService.getAllUsers();
	}

  goToGraph(graphId): any {
		
	}
  
  ngOnInit() {
  	
  	this.getAllUsers().subscribe(value => {
  		console.log(value)
  		this.users = value}
	)
  }

}
