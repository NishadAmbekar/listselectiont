import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CustomHttpService } from './shared/services/custom-http.service';
import { ListSelectionComponent } from './shared/list-selection/list-selection.component';
import { forkJoin, of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        ListSelectionComponent
      ],
      providers: [
        CustomHttpService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'multiselect-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('multiselect-app');
  });

  it('should load list data', inject([CustomHttpService], (customHttpService: CustomHttpService) => {
    spyOn(customHttpService, 'get').and.returnValue(of([{
      "id": 1,
      "user": "user1",
      "selected": false
    }, {
      "id": 2,
      "user": "user2",
      "selected": false
    }]));
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    forkJoin([
      customHttpService.get('../assets/listA.json'),
      customHttpService.get('../assets/listB.json')
    ]).subscribe((data) => {
      expect(app.listA).toBe(data[0]);
      expect(app.listB).toBe(data[1]);
    })
  }))
});
