import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apk-foods';
  x: any;
  constructor(private store: AngularFirestore) { }

  ngOnInit() {
    // this.x = this.store.collection('product-details').valueChanges({idField: 'id'}).subscribe(x => {
    // })
  }
}
