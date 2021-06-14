'use strict';

const Controller = require('egg').Controller;
const md5=require("md5")

class LiveController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = 'hi, egg';
    }
    async createLive() {
        const { ctx } = this;

        let key=this.randomString(20);


       let sign=this.sign(key);

       ctx.body={
           sign,
           key
       }

    }

    sign(key) {
        const { app, ctx } = this;
        const sercet = app.config.media.sercet;
        const expris_time = parseInt((Date.now() + 1000000)/ 1000); 
        const HashValue = md5(`/live/${key}-${expris_time}-${sercet}`);

        return `${expris_time}-${HashValue}`
    }
    randomString(length){
        const chars="0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result="";
        for(var i=length;i>0;--i){
            result+=chars[Math.floor(Math.random()*chars.length)]
        }

        console.log(result)

        return result;
    }
}

module.exports = LiveController;
