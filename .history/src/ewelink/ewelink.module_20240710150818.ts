import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [EwelinkController],
  providers: [EwelinkService],
})
export class AppModule {}
