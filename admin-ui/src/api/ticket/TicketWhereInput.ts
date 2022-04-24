import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  price?: FloatFilter;
};
