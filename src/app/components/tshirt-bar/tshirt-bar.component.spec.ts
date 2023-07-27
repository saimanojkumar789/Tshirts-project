import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtBarComponent } from './tshirt-bar.component';

describe('TshirtBarComponent', () => {
  let component: TshirtBarComponent;
  let fixture: ComponentFixture<TshirtBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshirtBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TshirtBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
