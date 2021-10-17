import { Controller, Post } from '@nestjs/common';
import { WaterResultsService } from './waterResults.service';

@Controller()
export class WaterResultsController {
  constructor(private readonly waterResultsService: WaterResultsService) {}
}
