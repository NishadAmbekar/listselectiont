import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  user: string = '';
  @Output() addData: any = new EventEmitter();
  @Output() close: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * method to send data to parent
   * @param type
   */
  sendData(type: string) {
    this.addData.emit({
      item: {
        user: this.user,
        selected: false
      },
      type: type
    })
  }
  /**
   * method to close the modal
   */
  closeModal() {
    this.close.emit('close');
  }

}
