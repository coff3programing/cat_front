// list-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CatService } from '../../../services/cats.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {
  cats: any[] = [];

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.loadCats();
  }

  loadCats(): void {
    this.catService.getCats().subscribe(
      (data) => {
        this.cats = data;
      },
      (error) => {
        console.error('Error fetching cats:', error);
      }
    );
  }

  getImageUrl(image: string): string {
    // Ajusta la ruta según la ubicación de tus imágenes en la carpeta "assets/cats-img"
    return `./assets/cats-img/${image}`;
  }
}
