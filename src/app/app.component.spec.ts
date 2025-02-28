import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'kr3m-application-task' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kr3m-application-task');
  });
});
