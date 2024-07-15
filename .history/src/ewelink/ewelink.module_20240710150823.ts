import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { EwelinkController } from './ewelink.controller';
import { EwelinkService } from './ewelink.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [EwelinkController],
  providers: [EwelinkService],
})
export class AppModule {}
