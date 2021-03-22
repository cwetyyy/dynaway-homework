import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Asset } from '../../shared/models/asset.model'
import { getRandomWidth } from '../../shared/functions'

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss'],
})
export class AssetCardComponent {
  @Input() asset?: Asset
  @Input() loading?: boolean;

  skeletonWidths = [0, 1, 2].map(() => getRandomWidth(20, 70))

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.loading + ' asset-card');
 }

  async navigateToDetail(assetId: string): Promise<void> {
    await this.router.navigate(['asset', assetId]);
  }
}
