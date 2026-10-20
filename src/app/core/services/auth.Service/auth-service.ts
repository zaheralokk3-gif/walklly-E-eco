import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class AuthService {

  private readonly http = inject(HttpClient);

  login(data: object):Observable<any> {
  return this.http.post("https://ecommerce.routemisr.com/api/v1/auth/signin", data)
  }

  signup(data: object):Observable<any> {
  return this.http.post("https://ecommerce.routemisr.com/api/v1/auth/signup", data)
  }
}
