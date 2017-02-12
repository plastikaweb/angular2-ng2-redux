import {Component} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from './state-management/state/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  counter = 0;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() {
    this.ngRedux.dispatch({type: 'INCREMENT'});
  }
}
