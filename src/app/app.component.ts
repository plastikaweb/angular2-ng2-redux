import {Component} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './state-management/state/app-state';
import {INCREMENT} from './state-management/actions/root-action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select('counter') count;
  //@select(['messaging', 'newMessages']) newMessages;
  @select((s: IAppState) => s.messaging.newMessages) newMessages;
  //messaging.newMessages

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    this.ngRedux.dispatch({type: INCREMENT});
  }
}
