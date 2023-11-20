import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
    getHelloWorld(){
        return "Hello World..!"
    }
}
