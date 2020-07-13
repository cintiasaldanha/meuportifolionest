import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNomePerfil(): string {
    return 'Cintia Saldanha<br/ >Descrição do perfil';
  }

getDescricaoPerfil(): string {
   return 'CSM® | CSPO® | Especialista em Desenvolvimento de Aplicações para Dispositivos Móveis';
}

}
