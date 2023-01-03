import { Component, OnInit, Self } from '@angular/core';

import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  providers: [AppService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'App Component';

  constructor(@Self() public appServic: AppService) {}

  ngOnInit(): void {}
}
