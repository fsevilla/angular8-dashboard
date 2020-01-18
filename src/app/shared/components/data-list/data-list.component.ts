import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit, OnChanges {

  @Input() data:any[] = [];
  @Input() config:any;

  displayedColumns: string[] = [];

  dataSource: MatTableDataSource<any>;

  @Output() onItemSelected:EventEmitter<any> = new EventEmitter<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {

    this.displayedColumns = this.config.columns.map(col => {
      return col.field;
    });

    this.dataSource = new MatTableDataSource(this.data);
    // this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes) {
    if(changes.data) {
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  onClick(item) {
    this.onItemSelected.emit(item);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    

}
