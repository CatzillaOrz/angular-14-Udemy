import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  optFilesPropFormData = [
    {
      key: 'additional-files',
      label: '附加文件',
      layout: '12',
      type: 'inputText',
      required: false,
      value: 'taz.add.xml',
    },
    {
      key: 'net-file',
      label: '路网文件',
      layout: '12',
      type: 'inputText',
      required: false,
      value: 'sumo.net.xml',
    },
    {
      key: 'route-files',
      label: '路由文件',
      layout: '12',
      type: 'inputText',
      required: false,
      value: '100_car.rou.xml',
    },
  ];
}
