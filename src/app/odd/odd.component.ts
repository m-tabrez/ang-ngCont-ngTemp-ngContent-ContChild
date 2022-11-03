import { AfterViewInit, Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, AfterViewInit {

  @ContentChild('oddNumber') oddNumber : ElementRef;

  constructor(
    private renderer : Renderer2
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.oddNumber.nativeElement, 'color', 'red')
  }

}