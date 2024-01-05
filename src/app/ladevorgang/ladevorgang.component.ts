import {Component, OnInit} from '@angular/core';
import {LadevorgangService} from "../ladevorgang.service";

@Component({
  selector: 'app-ladevorgang',
  standalone: true,
  imports: [],
  templateUrl: './ladevorgang.component.html',
  styleUrl: './ladevorgang.component.css'
})
export class LadevorgangComponent implements OnInit{
  isLoading: boolean = false;

  constructor(private ladevorgangService: LadevorgangService) {}
  ngOnInit(): void {
    this.ladevorgangService.loaderState.subscribe((state) => {
      this.isLoading = state;
    })
  }

}
