import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import * as fs from 'fs';
import * as path from 'path';
// import { SMB2 } from 'smb2';
const smb2 = require('smb2');
import * as fsPromises from 'fs/promises';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User, 'login')
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({
      where: {
        'state': 'Active',
      },
    });
  }

  async findOne(userID: string) {
    return await this.userRepository.findOne({
      where: { userID: userID },
    });
  }

  async update(userID: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(userID, updateUserDto);
  }

  async remove(userID: string) {
    return await this.userRepository.delete(userID);
  }

  async findOneWithUserName(username: string) {
    return await this.userRepository.findOne({
      where: {
        username: username,
        roles: {
          app: 'AssetControlV2'
        },
      },
      relations: {
        roles: true,
      },
    });
  }

  async readImageFromSharedDrive(filename: string): Promise<Buffer> {
    try {
      // ตั้งค่าการเชื่อมต่อกับ SMB
      const smbClient = new smb2({
        share: '\\\\172.16.58.231\\HRSystem',
        domain: process.env.CROSS_DB_HOST,
        username: process.env.CROSS_DB_USERNAME,
        password: process.env.CROSS_DB_PASSWORD,
      });

      const filePath = '//172.16.58.231//HRSystem//Photos/' + filename + '.jpg';

      const readFileAsync = promisify(this.smbClient.readFile).bind(this.smbClient);

      const fileData = await readFileAsync(filePath);

      smbClient.close();

      // คืนข้อมูลรูปภาพในรูปแบบ Buffer
      return fileData;
    } catch (error) {
      console.error('Error fetching image from SMB:', error.message);
      throw new Error('Failed to fetch image from SMB.');
    }
  }
}

function InjectModel(arg0: string): (target: typeof UserService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

