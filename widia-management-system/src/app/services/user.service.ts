import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, IUserWrapper } from '../interfaces/i-user';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = "/users"

  constructor(
    private baseService : BaseService,
    private httpClient: HttpClient
  ) { }

  all(): Observable<IUserWrapper>{
    return this.httpClient.get<IUserWrapper>(
      `${this.baseService.baseURL}${this.endpoint}`
    )
  }

  create(product: IUser): Observable<IUser>{
    const headers = {
      'COntent-Type': 'application/json'
    };

    const body = JSON.stringify(product);

    return this.httpClient.post<IUser>(
      `${this.baseService.baseURL}${this.endpoint}/add`, body, {headers}
    );
  }

  update(product: IUser): Observable<IUser>{
    const headers = {
      'Content-Type': 'application/json'
    };

    const {id, ...productClean} = product;

    const body = JSON.stringify(productClean);

    return this.httpClient.put<IUser>(
      `${this.baseService.baseURL}${this.endpoint}/${id}`, body, {headers}
    );
  }

  delete(product: IUser): Observable<IUser>{
    const headers = {
      'Content-Type': 'application/json'
    };

    const {id, ...productClean} = product;

    const body = JSON.stringify(productClean);

    return this.httpClient.delete<IUser>(
      `${this.baseService.baseURL}${this.endpoint}/${id}`, {headers}
    );
  }

}
