import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {IComments} from "../models/IComments";

export  default class CommentService {
    static fetchComments(): Promise<AxiosResponse<IComments[]>> {
        return $api.get<IComments[]>('/commentget')
    }
}