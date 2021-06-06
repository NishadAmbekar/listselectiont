import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit data to parent', () => {
    spyOn(component.addData, 'emit');
    component.user = 'user1';
    component.sendData('listA')
    expect(component.addData.emit).toHaveBeenCalledWith({
      item: {
          user: 'user1',
          selected: false
      },
      type: 'listA'
    });
  });
});
