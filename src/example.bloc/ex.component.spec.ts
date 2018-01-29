import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ExampleBlocComponent } from './ex.component';
describe('MainViewComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ExampleBlocComponent,
      ],
    }).compileComponents();
  }));
  it('should create the Main View Module', async(() => {
    const fixture = TestBed.createComponent(ExampleBlocComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
