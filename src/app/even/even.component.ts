import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, AfterViewInit{

  @ContentChild('evenNumber') evenNumber : ElementRef

  constructor( private renderer : Renderer2) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.evenNumber.nativeElement, 'color', 'green')
  }

}