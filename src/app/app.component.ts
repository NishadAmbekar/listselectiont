import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { List } from './shared/interfaces/list.interface';
import { CustomHttpService } from './shared/services/custom-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'multiselect-app';
  listA: List[] = [];
  listB: List[] = [];

  listSubscription?: Subscription;
  constructor(public customHttpService: CustomHttpService) {}

  ngOnInit(): void {
    this.listSubscription = forkJoin([
      this.customHttpService.get('../assets/listA.json'),
      this.customHttpService.get('../assets/listB.json')
    ]).subscribe((data) => {
      this.listA = data[0];
      this.listB = data[1];
    }, (err) => {

    })
  }

  ngOnDestroy(): void {
    if (this.listSubscription) {
      this.listSubscription.unsubscribe();
    }
  }
}
