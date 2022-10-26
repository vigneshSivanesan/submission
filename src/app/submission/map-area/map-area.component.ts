import { Component, OnInit } from '@angular/core';
import {MARKERS } from 'src/app/utils/constant';
@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.scss']
})
export class MapAreaComponent implements OnInit {

  lat: number = 10.0889;
  lng: number = 77.0595;
  zoom: number = 8;
  markers:any;
  constructor() { }

  ngOnInit(): void {
    this.markers = MARKERS;
  }

}
