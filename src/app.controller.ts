import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getNomePerfil(): string {
    return this.appService.getNomePerfil();
  }

  @Get()
  getDescricaoPerfil(): string{
    return this.appService.getDescricaoPerfil();
  }
}
