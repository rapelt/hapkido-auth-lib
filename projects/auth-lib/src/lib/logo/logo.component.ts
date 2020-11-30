import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'auth-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  imageUrl: string;

  constructor(@Inject('config') private config) { }

  ngOnInit(): void {
    this.imageUrl = this.config.static_image_location + this.config.default_logo;
  }

  projectName(): string {
    return this.config.projectName;
  }

}
