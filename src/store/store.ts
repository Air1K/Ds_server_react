import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import CommentService from "../services/CommentService";

export default class Store{
    user = {} as IUser
    isAuth = false;
    messages = '';
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }
    setAuth(bool: boolean){
        this.isAuth = bool;
    }
    setUser(user: IUser){
        this.user = user;
    }

    setMessages(message: string){
        this.messages = message;
    }

    setIsLoading(bool: boolean){
        this.isLoading = bool;
    }

    async login(email: string, password: string){
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);


        } catch (e){
            console.log(e.response?.data?.message);
            this.setMessages(e.response?.data?.message);
        }
    }

    async registration(name: string, email: string,username: string, password: string){
        try {
            const response = await AuthService.registration(name, email, username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e){
            console.log(e.response?.data?.message);
            this.setMessages(e.response?.data?.message);
        }
    }

    async logout(){
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e){
            console.log(e.response?.data?.message);
        }
    }

    async checkAuth(){
        this.setIsLoading(true)
        try{
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true});
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);

        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            this.setIsLoading(false);
        }
    }

    async commentPush(id: string, content: string){
        console.log(content);
        try {
            const response = await CommentService.fetchCommentsPost(id, content);
            console.log(response);

        } catch (e){
            console.log(e.response?.data?.message);
            this.setMessages(e.response?.data?.message);
        }
    }

}