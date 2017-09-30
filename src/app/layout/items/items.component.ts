import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  rows: any[] = [];
  showEditable: boolean = true;
  editRowId: any;
  editableText: any = {
    id: 1,
    name: 'Состав',
    description: 'Особое тесто по итальянской технологии, фирменный соус для пиццы, ветчина, сыр Mozarella, грибы, маслины, орегано.'
  };

  constructor() {
    this.rows = arr;
  }

  save() {
    this.editRowId = 0;
  }

  addRow() {
    let indexForId = this.rows.length + 1;
    this.rows.push({
      id: indexForId, name: '123123123'
    })
  }

  toggle(val) {
    this.editRowId = val;
  }

  settings = {
    add: {
      addButtonContent: '<i class="material-icons">add_box</i>',
      createButtonContent: '<i class="material-icons">save</i>',
      cancelButtonContent: '<i class="material-icons">close</i>',
    },
    edit: {
      editButtonContent: '<i class="material-icons">edit</i>',
      saveButtonContent: '<i class="material-icons">save</i>',
      cancelButtonContent: '<i class="material-icons">close</i>',
    },
    delete: {
      deleteButtonContent: '<i class="material-icons">delete_sweep</i>',
      confirmDelete: false,
    },
    columns: {
      name: {
        title: 'Название'
      },
      weight: {
        title: 'Вес'
      },
      price: {
        title: 'Цена'
      }
    }
  };

  data = [
    {
      name: "Классика",
      weight: "480",
      price: "10,30"
    },
    {
      name: "Макси ",
      weight: "930 ",
      price: "14,20 "
    }
  ];

  ngOnInit() {
  }

}


export const arr = [
  {
    id: 1,
    name: 'one'
  },
  {
    id: 2,
    name: 'two'
  }
]
