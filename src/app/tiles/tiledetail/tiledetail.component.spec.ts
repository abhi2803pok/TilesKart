import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiledetailComponent } from './tiledetail.component';

describe('TiledetailComponent', () => {
  let component: TiledetailComponent;
  let fixture: ComponentFixture<TiledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
