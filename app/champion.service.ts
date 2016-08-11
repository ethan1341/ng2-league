
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Champion } from './champion';
import './rxjs-operators'
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ChampionService{
  constructor (http: Http){};
  private championsURL = '/champions'
  getChampions(): Observable <Champion[]>{

  }
}
