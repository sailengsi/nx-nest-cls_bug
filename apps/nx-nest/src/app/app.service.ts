import { Injectable } from '@nestjs/common';
import { ClsService } from 'nestjs-cls';

@Injectable()
export class AppService {

  constructor(
    private readonly clsService: ClsService,
  ) {
  }
  getData(): { message: string } {
    console.log(this.clsService.getId())
    return { message: 'Hello API' };
  }
}
