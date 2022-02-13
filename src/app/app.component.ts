import { NavComponent } from './nav/nav.component';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root, ngbd-modal-options',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sprint8';

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    repeatpassword: new FormControl(''),
  });

  log = true;
  error = false;
  usernotexist = false;
  starshipsver = false;

  constructor(private modalService: NgbModal) {}

  reg(){

    let user = this.registerForm.value.username;
    let pass = this.registerForm.value.password;
    let rpass = this.registerForm.value.repeatpassword;

    if(user != "" && pass != "" && rpass != ""){
      if(pass == rpass){
        localStorage.setItem('username', user);
        localStorage.setItem('password', pass);
        this.log = !this.log;
        this.error = false;
        this.modalService.dismissAll();
        this.starshipsver = true;
        this.registerForm.reset;
      }else{
        this.error = true;
      }
    }else{
      console.log("ERROR");
      this.error = true;
    }

  }

  login(){
    let user = this.loginForm.value.username;
    let pass = this.loginForm.value.password;
    console.log(user);
    if(user != "" && pass != ""){
      this.error = false;
      if(localStorage.getItem('username') == user && localStorage.getItem('password') == pass){
        this.log = !this.log;
        this.error = false;
        this.modalService.dismissAll();
        this.starshipsver = true;
        this.registerForm.reset;
      }else{
        this.usernotexist = true;
        this.modalService.dismissAll();
        document.getElementById("regis")?.click();
      }
    }else{
      console.log("ERROR");
      this.error = true;
    }
  }

  openLogin(content : any) {
    this.modalService.open(content);
  }

  sesionClose(){
    this.log = !this.log;
    this.starshipsver = false;
  }

}
