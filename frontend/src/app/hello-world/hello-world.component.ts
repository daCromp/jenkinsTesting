import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { HelloWorldService } from './hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message = "";

  constructor(private helloWorldService: HelloWorldService) { }

  ngOnInit(): void {
    this.helloWorldService.getMessage().subscribe(message => {
      this.message = message;
    })

  }
}
