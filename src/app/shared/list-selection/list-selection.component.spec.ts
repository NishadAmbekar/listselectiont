import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectionComponent } from './list-selection.component';
import { FormsModule } from '@angular/forms';

describe('ListSelectionComponent', () => {
  let component: ListSelectionComponent;
  let fixture: ComponentFixture<ListSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSelectionComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select items', () => {
    const item = {
      id: 1,
      user: 'user1',
      selected: false
    }
    component.listAItems.selected = [];
    component.selectItem(item, component.listAItems.selected);
    expect(component.listAItems.selected.length).toEqual(1);
  })

  it('should deselect items', () => {
    const item = {
      id: 1,
      user: 'user1',
      selected: true
    }
    component.listAItems.selected = [{
      id: 1,
      user: 'user1',
      selected: true
    }];
    component.selectItem(item, component.listAItems.selected);
    expect(component.listAItems.selected.length).toEqual(0);
  })

  it('should move items between the list', () => {
    const item = {
      id: 1,
      user: 'user1',
      selected: true
    }
    component.listAItems = {
      list: [
        item
      ],
      selected: [item]
    };
    component.listBItems = {
      list: [],
      selected: []
    }
    component.moveItems(component.listAItems, component.listBItems);
    expect(component.listBItems.list.length).toEqual(1);
    expect(component.listAItems.list.length).toEqual(0);
  })
  it('delete items from list', () => {
    const listItems = [
      {
        id: 1,
        user: 'user1',
        selected: true
      }
    ]
    expect(component.deleteItems(listItems)).toEqual([]);
  })
});
