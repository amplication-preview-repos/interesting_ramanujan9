/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BetService } from "../bet.service";
import { BetCreateInput } from "./BetCreateInput";
import { Bet } from "./Bet";
import { BetFindManyArgs } from "./BetFindManyArgs";
import { BetWhereUniqueInput } from "./BetWhereUniqueInput";
import { BetUpdateInput } from "./BetUpdateInput";

export class BetControllerBase {
  constructor(protected readonly service: BetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bet })
  async createBet(@common.Body() data: BetCreateInput): Promise<Bet> {
    return await this.service.createBet({
      data: {
        ...data,

        match: data.match
          ? {
              connect: data.match,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        amount: true,
        createdAt: true,
        id: true,

        match: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Bet] })
  @ApiNestedQuery(BetFindManyArgs)
  async bets(@common.Req() request: Request): Promise<Bet[]> {
    const args = plainToClass(BetFindManyArgs, request.query);
    return this.service.bets({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        match: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async bet(@common.Param() params: BetWhereUniqueInput): Promise<Bet | null> {
    const result = await this.service.bet({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        id: true,

        match: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBet(
    @common.Param() params: BetWhereUniqueInput,
    @common.Body() data: BetUpdateInput
  ): Promise<Bet | null> {
    try {
      return await this.service.updateBet({
        where: params,
        data: {
          ...data,

          match: data.match
            ? {
                connect: data.match,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          amount: true,
          createdAt: true,
          id: true,

          match: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBet(
    @common.Param() params: BetWhereUniqueInput
  ): Promise<Bet | null> {
    try {
      return await this.service.deleteBet({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          id: true,

          match: {
            select: {
              id: true,
            },
          },

          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
