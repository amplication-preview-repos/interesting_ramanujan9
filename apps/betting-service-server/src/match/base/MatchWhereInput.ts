/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BetListRelationFilter } from "../../bet/base/BetListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EnumMatchResult } from "./EnumMatchResult";
import { StringNullableFilter } from "../../util/StringNullableFilter";

@InputType()
class MatchWhereInput {
  @ApiProperty({
    required: false,
    type: () => BetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => BetListRelationFilter)
  @IsOptional()
  @Field(() => BetListRelationFilter, {
    nullable: true,
  })
  bets?: BetListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  date?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumMatchResult,
  })
  @IsEnum(EnumMatchResult)
  @IsOptional()
  @Field(() => EnumMatchResult, {
    nullable: true,
  })
  result?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  team1?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  team2?: StringNullableFilter;
}

export { MatchWhereInput as MatchWhereInput };
