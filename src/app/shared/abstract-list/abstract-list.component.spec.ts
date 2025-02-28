import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AbstractListComponent} from './abstract-list.component';
import {IContact} from "../../core/models/contact.model";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {routes} from "../../app.routes";

describe('AbstractListComponent', () => {
  let component: AbstractListComponent<IContact>;
  let fixture: ComponentFixture<AbstractListComponent<IContact>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractListComponent],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideRouter(routes)]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AbstractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
