import { Injectable } from '@nestjs/common';
import { client } from '../../../global/client/client.js';

@Injectable()
export class TestService {

  async getBlockNumber(): Promise<string> {
    const blockNumber = await client.getBlockNumber();
    return blockNumber.toString();
  }
}
