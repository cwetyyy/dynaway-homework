import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { IonicModule } from '@ionic/angular'
import { AssetService } from '../shared/services/asset.service'
import { AssetCardComponent } from './asset-card/asset-card.component'
import { HomePage } from './home.page'

describe('HomePage', () => {
  let component: HomePage
  let fixture: ComponentFixture<HomePage>

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePage, AssetCardComponent ],
      providers: [{ provide: AssetService }],
      imports: [IonicModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(HomePage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  });

  it('should display assets, which are defined', () => {
    const assets = component.assets
    expect(assets).toBeDefined()
  });  

  it('should render ion-content',() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ion-content').textContent).toBeTruthy;
  });

  it('should have called ionViewWillEnter function',() => {
    expect(component.ionViewWillEnter).toHaveBeenCalled;
  });
})
