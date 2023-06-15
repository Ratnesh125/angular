import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
providedIn: 'root'
}
)
export class MyserviceService {
constructor(private http:HttpClient) { }
// ng g s myservice
data:any
show()
{
return this.http.get("http://localhost:3000/users");
}
}