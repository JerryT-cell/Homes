import { Component, EventEmitter, Input, model, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  count = model("");
 // heroes$: Observable<String>;

  constructor(private router: ActivatedRoute) {
    
  }

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  /*ngOnInit() {
    this.heroes$ = this.router.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );
  }*/



}
