import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private auth: AngularFireAuth) { }
  signIn(email: string ,password :string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }
  signUp(email: string ,password :string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }
  getUser(){
    return this.auth.authState;
  }
  signOut(){
    return this.auth.signOut();
  }
}
