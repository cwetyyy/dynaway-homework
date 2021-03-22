import { Component, OnInit} from '@angular/core'
import { Asset } from '../shared/models/asset.model'
import { AssetService } from '../shared/services/asset.service'
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  assets: Asset[] = [];
  loading = false;

  constructor(private assetService: AssetService) {}

  ionViewWillEnter(): void {
    this.assets = []
    this.loading = true
    this.assetService.getAll().pipe(
      finalize(() => this.loading = false)
    ).subscribe((assets) => {
      this.assets = assets;
      console.log(this.assets);
      console.log(this.loading + ' home');
    })
  }
}
