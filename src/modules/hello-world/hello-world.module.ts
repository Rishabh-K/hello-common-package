import { Global, Module } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';

const providers = [
  HelloWorldService
];

@Module({
  providers,
    exports: [
        ...providers
    ]
})
export class HelloWorldModule {}
