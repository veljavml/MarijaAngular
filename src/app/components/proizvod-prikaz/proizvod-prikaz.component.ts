import { Component } from '@angular/core';
import { ProizvodService } from '../../services/proizvod.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Proizvod } from '../../model/proizvod';

@Component({
  selector: 'app-proizvod-prikaz',
  templateUrl: './proizvod-prikaz.component.html',
  styleUrl: './proizvod-prikaz.component.css'
})
export class ProizvodPrikazComponent {

  constructor(private servis:ProizvodService) { }

  ngOnInit(): void {
    this.servis.ucitajProizvode().subscribe(podatak=>{
      console.log(podatak);
      this.dataSource.data = podatak;
    })
  }

  dataSource = new MatTableDataSource<Proizvod>();
  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena','kategorija','datumKreiranja','slika','brisanje'];

}
