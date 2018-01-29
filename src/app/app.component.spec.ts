import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { XpoCommonLibrary } from '@xpo/common';
import { ConfigService } from '../core/index';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        XpoCommonLibrary],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: ConfigService, useValue: new ConfigService(null) },
      ],
    }).compileComponents();
  }));
  it('should create the app container', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'XPO Logistics NG Seed'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('XPO Logistics NG Seed');
  }));
});
