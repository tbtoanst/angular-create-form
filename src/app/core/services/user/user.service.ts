import { Injectable } from '@angular/core';
import { IUser} from 'src/app/core/models/user.model';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/services/common/api.service';
import { IHttpRequest } from 'src/app/core/models/api.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService
  ) { }

  create(data: IUser): Observable<IUser>{
    const httData: IHttpRequest = { url: 'create', body: data };
    return this.apiService.post(httData)
  }
}
