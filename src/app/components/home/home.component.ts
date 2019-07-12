import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    @Input() user: any = {
        name: null
    };

    @Output() userEvent = new EventEmitter();

    onSubmit(form) {
        this.http.get('https://api.github.com/users/' + form.value.username)
            .subscribe(dados => {
                console.log(dados);
            },
            (error: any) => alert('erro')
            );
        form.form.reset();

      this.userEvent.emit(this.user.name);

      this.router.navigate(['/result']);
    }

    constructor(protected http: HttpClient, private router: Router) { }

    ngOnInit() {
    }

}
