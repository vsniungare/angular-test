import { Component, OnInit } from '@angular/core';
import { CarService } from '../../shared/car/car.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  users: Array<any>

constructor(private carService: CarService){
  
}
  ngOnInit(): void {
    this.carService.getCase().subscribe(data=> this.users = data)
  }
  
}
