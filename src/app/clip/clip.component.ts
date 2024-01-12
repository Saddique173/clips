import { Component,ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import videojs from 'video.js';
import Player from "video.js/dist/types/player";
import IClip from '../models/clip.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers:[DatePipe]
})
export class ClipComponent implements OnInit {
  //id =''
  @ViewChild('videoPlayer',{static:true}) target?: ElementRef
  
  player = videojs?.players /// not accepting  videojs.Player
  clip?: IClip


  constructor(public route: ActivatedRoute, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.player = videojs(this.target?.nativeElement);
    this.route.data.subscribe(data =>{
    this.clip = data.clip as IClip
    this.player?.src({
      src: this.clip.url,
      type: 'video/mp4'
    })
    })

    //this.id = this.route.snapshot.params.id
    // this.route.params.subscribe((prms:Params) => {
    //   this.id = prms.id
    // })

  }

}