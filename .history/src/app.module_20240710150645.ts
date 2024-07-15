import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { AuthModule } from "./auth/auth.module";
import { AssetHeaderModule } from "./asset/asset_header/asset_header.module";
import { IpHeaderModule } from "./asset/ip_header/ip_header/ip_header.module";
import { AssetSpareModule } from "./asset/asset_spare/asset_spare/asset_spare.module";
import { UserModule } from "./login/user/user.module";
import { MasterModelModule } from "./master/master_model/master_model.module";
import { MasterBranchModule } from "./master/master_branch/master_branch.module";
import { MasterLicenseModule } from "./master/master_license/master_license.module";
import { MasterCategoryModule } from "./master/master_category/master_category.module";
import { MasterSubcategoryModule } from "./master/master_subcategory/master_subcategory.module";
import { MasterStatusModule } from "./master/master_status/master_status.module";
import { MasterBrandModule } from "./master/master_brand/master_brand.module";
import { MasterOsModule } from "./master/master_os/master_os.module";
import { MasterOslicensetypeModule } from "./master/master_oslicensetype/master_oslicensetype.module";
import { MasterOsversionModule } from "./master/master_osversion/master_osversion.module";
import { MasterOfficeversionModule } from "./master/master_officeversion/master_officeversion.module";
import { MasterAntivirusModule } from "./master/master_antivirus/master_antivirus.module";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { MasterAnnualstatusModule } from "./master/master_annualstatus/master_annualstatus.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mssql',
          host: configService.get('MAIN_DB_HOST'),
          port: parseInt(configService.get('MAIN_DB_PORT')),
          database: configService.get('MAIN_DB_DATABASE'),
          username: configService.get('MAIN_DB_USERNAME'),
          password: configService.get('MAIN_DB_PASSWORD'),
          schema: configService.get('MAIN_DB_SCHEMA'),
          entities: ['dist/asset/**/*.entity{.ts,.js}'],
          autoLoadEntities: true,
          synchronize: false,
          options: {
            encrypt: true,
            trustServerCertificate: true,
            cryptoCredentialsDetails: {
              ciphers: 'DEFAULT@SECLEVEL=0',
            }
          }
        };
      },
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'login',
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'mssql',
          host: configService.get('LOGIN_DB_HOST'),
          port: parseInt(configService.get('LOGIN_DB_PORT')),
          database: configService.get('LOGIN_DB_DATABASE'),
          username: configService.get('LOGIN_DB_USERNAME'),
          password: configService.get('LOGIN_DB_PASSWORD'),
          schema: configService.get('LOGIN_DB_SCHEMA'),
          entities: ['dist/login/**/*.entity{.ts,.js}'],
          autoLoadEntities: true,
          synchronize: false,
          options: {
            encrypt: true,
            trustServerCertificate: true,
            cryptoCredentialsDetails: {
              ciphers: 'DEFAULT@SECLEVEL=0',
            }
          }
        };
      },
    }),
    AssetHeaderModule,
    IpHeaderModule,
    AssetSpareModule,
    MasterModelModule,
    MasterBranchModule,
    MasterLicenseModule,
    MasterCategoryModule,
    MasterSubcategoryModule,
    MasterStatusModule,
    MasterBrandModule,
    MasterOsModule,
    MasterOslicensetypeModule,
    MasterOsversionModule,
    MasterOfficeversionModule,
    MasterAntivirusModule,
    MasterAnnualstatusModule,
    UserModule,
    AuthModule,
    Ew
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
