import { Component, OnInit, Input, Output, ViewChild, OnChanges, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { List } from '../interfaces/list.interface';
@Component({
  selector: 'app-list-selection',
  templateUrl: './list-selection.component.html',
  styleUrls: ['./list-selection.component.css']
})
export class ListSelectionComponent implements OnInit, OnChanges {
  @Input() listA: List[] = [];
  @Input() listB: List[] = [];
  @Input() header: string = '';
  showModal: boolean = false;
  listAItems: any = {
    list: [],
    selected: []
  };
  listBItems: any = {
    list: [],
    selected: []
  };
  selectedItems : List[] = [];
  getItemsSubscription?: Subscription;
  constructor() {
  }

  ngOnChanges() {
    this.listAItems.list = Object.assign([], this.listA);
    this.listBItems.list = Object.assign([], this.listB);
  }

  ngOnInit(): void {
  }
  /**
   * method to add the item to the list
   * @param event
   */
  add(event: any) {
    this.showModal = false;
    if (event.type === 'listA') {
      this.listAItems.list.push(event.item);
    } else {
      this.listBItems.list.push(event.item);
    }
  }
  /**
   * method to select the item from list
   * @param item
   * @param selected
   */
  selectItem(item: List, selected: List[]): void {
    item.selected = item.selected ? false : true;
    if (item.selected) {
      selected.push(item);
    } else {
      const index = selected.findIndex((ele: any, index: number) => ele.user === item.user);
      selected.splice(index, 1);
    }
  }
  /**
   * method to move item between the list
   * @param item
   * @param selected
   */
  moveItems(source: any, destination: any) {
    const selected = source.list.filter((ele: List) => ele.selected);
    for (let item  of selected) {
      item.selected = false;
    }
    destination.list = [...destination.list, ...selected];
    source.list = source.list.filter((ele: List) => !source.selected.includes(ele));
    source.selected = [];
  }
  /**
   * method to close the modal
   * @param item
   * @param selected
   */
  closeModal(event: string) {
    this.showModal = false;
  }
  /**
   * method to delete the item from the lists
   */
  delete(): void {
    this.listAItems.list = this.deleteItems(Object.assign([], this.listAItems.list));
    this.listBItems.list = this.deleteItems(Object.assign([], this.listBItems.list));
    this.listAItems.selected = [];
    this.listBItems.selected = [];
  }
  /**
   * method to delete the item from the lists
   * @param list
   */
  deleteItems(list: List[]): List[] {
    list = list.filter((ele, index) => !ele.selected);
    return list;
  }
}
