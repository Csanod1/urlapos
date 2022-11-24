import { Controller, Get, Query, Render } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(
    @Query('nev') nev: string,
    @Query('eletkor') eletkor: number,
  ): object {
    const errors: any = {};
    if (eletkor < 18) {
      errors.eletkor = 'nem multal el 18';
    }
    if (nev === '') {
      errors.nev = 'A nev mezőt is töltsd ki';
    }
    //return { nev: nev, eletkor: eletkor, errors: errors };
    return { nev, eletkor, errors };
  }
}
