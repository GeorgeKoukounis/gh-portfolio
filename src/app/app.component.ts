import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  username = environment.username;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('GitHub portfolio app');
    this.meta.addTags([
    {
      name: 'description',
      content: `${this.username}'s GitHub portfolio`
    },
    {
      name: 'author',
      content: this.username
    }
    ]);
  }
  /* page 226 of book, continue tomorrow */
}
