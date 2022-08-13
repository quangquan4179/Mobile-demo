
import {action, observable, makeObservable} from 'mobx'
import { User } from '../interface';
import { user } from '../mock/user';
class AuthStore {
    isAuth:boolean=false;
    user:User|null=null;
    constructor(){makeObservable(this,{
        isAuth:observable,
        user:observable,
        setAuth:action
        })
    }
    setAuth(isAuth:boolean,user:any){
        this.isAuth=isAuth,
        this.user=user
    }


    async Login(email:string, password:string){
        //call api 
        this.setAuth(true,user)
    }
}

export default new AuthStore()