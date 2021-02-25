import { ApiProperty } from '@nestjs/swagger';

export class CreateDTO {
  @ApiProperty()
  title: string;
  @ApiProperty({ required: false })
  isComplited?: boolean;
}

export class UpdateDTO {
  @ApiProperty()
  title: string;
  @ApiProperty({ required: false })
  isComplited?: boolean;
}