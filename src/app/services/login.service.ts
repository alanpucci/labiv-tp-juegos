import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ERROR, SUCCESS } from './login.types';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user:any;

  constructor(private router:Router, private auth: AngularFireAuth, private spinner: NgxSpinnerService,
              private ngZone:NgZone, private toastr: ToastrService,) { }

  showError(error:ERROR){
    switch(error){
      case ERROR.INVALID_EMAIL:
          this.toastr.error("El email es inválido");
          break;
      case ERROR.EMAIL_ALREADY_IN_USE:
          this.toastr.error("El email ingresado ya está registrado");
          break;
      case ERROR.WEAK_PASSWORD:
          this.toastr.error("La contraseña debe tener un mínimo de 6 carácteres");
      break;
      case ERROR.USER_NOT_FOUND:
          this.toastr.error("Email y/o contraseña inválido");
      break;
      case ERROR.EMPTY_FIELDS:
          this.toastr.error("Todos los campos son obligatorios");
      break;
      case ERROR.DIFFERENT_PASSWORDS:
          this.toastr.error("Las contraseñas no coinciden");
      break;
      default:
          this.toastr.error("Ha ocurrido un error, por favor reintente nuevamente");
      break;
    }
  }

  showSuccess(success:any){
    switch(success){
      case SUCCESS.SIGNED_UP:
        this.toastr.success("Cuenta creada exitosamente");
      break;
    }
  }

  async signIn(email:string, password:string) {
    try {
      this.spinner.show();
      if(!email || !password) return this.showError(ERROR.EMPTY_FIELDS);
      const userDB = await this.auth.signInWithEmailAndPassword(email, password)
      if(userDB){
        this.user=userDB;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.ngZone.run(() => {
          this.router.navigateByUrl('/home');
        });
      }
    } catch (error:any) {
      this.showError(error.code);
    } finally{
      this.spinner.hide();
    }
  }

  async signUp(email:string,password:string, passwordRepeat:string) {
    try {
      this.spinner.show();
      if(!email || !password || !passwordRepeat) return this.showError(ERROR.EMPTY_FIELDS);
      if(password !== passwordRepeat) return this.showError(ERROR.DIFFERENT_PASSWORDS);
      const user = await this.auth.createUserWithEmailAndPassword(email, password)
      if(user){
        this.toastr.success("Cuenta creada exitosamente");
        this.signIn(email,password);
      }
    } catch (error:any) {
      this.showError(error.code);
    } finally{
      this.spinner.hide();
    }
  }

  async logout(){
    this.user=null;
    await this.auth.signOut();
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  getAuth() {
    return this.auth.authState;
  }

  isAuthenticated(){
    return JSON.parse(localStorage.getItem('user')!);
  }
}
