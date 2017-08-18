import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import {Route} from '@angular/router';
import { Http, Response, Headers, RequestOptions, Request, RequestMethod, Jsonp} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AppServices {


    constructor(public http: Http, public jsonp: Jsonp){}

    headers = new Headers({
       
        'Content-Type': 'application/json',
        'Accept': 'application/json',  
    });

    

    public getJSON(url:string): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch(error => {
                console.log(error);
                return Observable.throw(error);});
        //tal vez deberia quitar el catch?, 
    }

    public add(url: string, body: any): Observable<any> {
        let options = new RequestOptions({
            method: RequestMethod.Post,
            headers: this.headers,
            body: JSON.stringify(body),
            url: url
        });
        return this.http.request(new Request(options));
    }

    public update(url: string ,body: any): Observable<any>
    {
        let options = new RequestOptions({
            method: RequestMethod.Put,
            headers: this.headers,
            body: JSON.stringify(body),
            url: url + body.id
        });
        return this.http.request(new Request(options))
           
    }

    public delete(url: string, id: any): Observable<any> {
        let aux: any;
        let options = new RequestOptions({
            method: RequestMethod.Delete,
            headers: this.headers,
            url: url + id
          });
        return this.http.request(new Request(options));
        
          
    }
}

 // let bodyString = JSON.stringify(body); // Stringify payload
 //let headers = new Headers({ 'Content-Type': 'application/json' });

 //return this.http.post("data.json", JSON.stringify(body), { headers: { 'Content-Type': 'application/json' } })
        //  .map((res: Response) => res.json())
        //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));