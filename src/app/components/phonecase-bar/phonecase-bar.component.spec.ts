import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseBarComponent } from './phonecase-bar.component';

describe('PhonecaseBarComponent', () => {
  let component: PhonecaseBarComponent;
  let fixture: ComponentFixture<PhonecaseBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonecaseBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonecaseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
