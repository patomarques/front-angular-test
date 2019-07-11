import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    user: any = {
        name: null
    };

    onSubmit(form) {
        console.log(form.value);

        this.http.get('https://api.github.com/users/' + form.value.username)
            .subscribe(dados => console.log(dados));
            /*.catch(err => Observable.throw(err));*/
        form.form.reset();
    }

    constructor(protected http: HttpClient) { }

    ngOnInit() {
    }

}
