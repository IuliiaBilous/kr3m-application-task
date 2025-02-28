import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LayoutComponent} from './layout.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {routes} from "../app.routes";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideRouter(routes)]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
