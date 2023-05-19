import {
  Component,
  Directive,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { books } from './books';
import { ReusableGridTemplateComponent } from './reusable-grid-template/reusable-grid-template.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public rowData = [];
  public gridApi: any;
  public columnDefs = [];

  @ViewChild('authorList', { static: true }) authorList: TemplateRef<any>;

  public defaultColDef = {
    autoHeight: true,
    resizable: true,
  };

  public books: any;

  ngOnInit() {
    this.rowData = books.books;
    this.columnDefs = [
      {
        headerName: 'Book Type',
        field: 'type',
      },
      {
        headerName: 'Authors',
        cellRendererFramework: ReusableGridTemplateComponent,
        cellRendererParams: {
          ngTemplate: this.authorList,
        },
      },
    ];
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  dataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
