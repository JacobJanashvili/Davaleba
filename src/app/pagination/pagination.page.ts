import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.page.html',
  styleUrls: ['./pagination.page.scss'],
})
export class PaginationPage implements OnInit {
  isActive = false;
  selectedItem=''
  choiceMade = false;
  constructor(private _location:LocationService) {}

  ngOnInit() {
    this._location.getLocation()
  }
}
