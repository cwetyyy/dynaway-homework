import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { Asset } from '../models/asset.model'
import { mockAssetHttpResponse } from './asset.test'
import { catchError, delay, tap } from 'rxjs/operators'
import { getRandomInt } from '../functions';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AssetService {

  constructor(public toastController: ToastController) {
  }

  getAll(): Observable<Asset[]> {
    return of(mockAssetHttpResponse.data).pipe(
      delay(getRandomInt(1000) + 500), // fake random http delay,
      tap(() => { // a small chance for the data fetch to error
        if (getRandomInt(10) % 10 === 0) throw Error('Http error')
      }), 
      catchError((error: any)=>{
        let errorMessage = `Error Message: ${error.message}`;
        this.toastController.create({
          header: 'Something went wrong',
          message: errorMessage,
          buttons: ['OK']
        }).then(alertEl => {
          alertEl.present();
        });
        return throwError(errorMessage);
      })
    )
  }
}

