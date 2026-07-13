import { Controller, Get } from '@nestjs/common';
import { TestService } from '../service/test.service.js';
import { GeneralResponse } from '../../../global/apiPayload/api.response.js';
import { TestSuccessStatus, TestErrorStatus } from '../code/test.status.js';
import { TestException } from '../exception/test.exception.js';
import { TestControllerDocs, GetHelloDocs } from './docs/test.controller.docs.js';

@TestControllerDocs()
@Controller()
export class TestController {
  constructor(private readonly testService: TestService) { }

  @GetHelloDocs()
  @Get('/test')
  async getHello(): Promise<GeneralResponse<string>> {
    const result = await this.testService.getBlockNumber();
    return GeneralResponse.onSuccess(TestSuccessStatus.TEST_OK, result)
  }

  @Get('/exception')
  async getException() {
    throw new TestException(TestErrorStatus.TEST_ERROR)
  }
}
