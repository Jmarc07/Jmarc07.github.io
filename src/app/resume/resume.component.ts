import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Jean-marc Naounou - Resume');
  }

  DownloadFile() {
    let link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://drive.google.com/file/d/1oKcib6dyWExLUS89yAYVZbq-Lry2XsFo/view?usp=drive_link');
    link.click();
    link.remove();
  }
}
