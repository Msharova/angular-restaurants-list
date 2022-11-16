import { Component, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { TableData } from './data.model';
import { FetchDataService } from '../fetch-data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*', minHeight: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent implements OnInit {

  dataSource: any;
  initialData: TableData[] = [];
  columnsToDisplay: string[] = [];
  expandedVenue!: TableData | null;

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor(private service: FetchDataService) { }

  ngOnInit(): void {
    this.service.fetchData().subscribe((res) => {
      this.initialData = res as TableData[];
      console.log(this.initialData);
      this.initialData = fillTable(this.initialData);


      this.dataSource = new MatTableDataSource<TableData>(this.initialData);
      console.log(this.dataSource);

      this.columnsToDisplay = [
        'title',
        'city',
        'postcode',
        'address',
        'startdate',
      ];

      this.dataSource.sort = this.sort;
    });
  }

  //closing expanded after sort
  announceSortChange(sortState: Sort) {
    this.expandedVenue = null;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toUpperCase();
  }

}

//function for injecting sorting parameters
function fillTable(origdata: TableData[]) {
  origdata.forEach((entry) => {
    //Date fixing
    if (typeof entry.dates.startdate == 'undefined')
      entry = Object.assign(entry, { startdate: '' });
    else
      entry = Object.assign(entry, {
        startdate: entry.dates.startdate.slice(6 - 10),
      });
    
    //Image fixing
    if (entry.media.length == 0)
      entry = Object.assign(entry, {mainpic: "No picture provided"});
    else
      for (let i = 0; i < entry.media.length; i++)
        if (entry.media[i].main == 'true') 
          {
            entry = Object.assign(entry, { mainpic: `<img style="max-width: 450px; max-height: 300px" src="${entry.media[i].url}" alt="${entry.title}"/>`});
            break;
          }          
      
    //urls fixing
    if (entry.urls.length > 0)
    
      entry = Object.assign(entry, { mainurl: `<a href= "${entry.urls[0]}">${entry.urls[0]}</a>`});
    else
      entry = Object.assign(entry, { mainurl: "no url provided" });

    // all the other params
    let sortparams = {
      city: fixName(entry.location.city),
      address: entry.location.adress,
      postcode: entry.location.zipcode,
    };
    entry = Object.assign(entry, sortparams);
  });

  return origdata;
}

//Fixing name of cities
function fixName(string: string) {
  const words = string.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  string = words.join(' ');
  return string;
}