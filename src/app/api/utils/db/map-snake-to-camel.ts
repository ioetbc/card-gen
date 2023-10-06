import mapKeys from "lodash/mapKeys";
import camelCase from "lodash/camelCase";
import {TCard, TStableDiffusionBody} from "@/app/types";

export const mapSnakeToCamel = ({
  data,
}: {
  data: TStableDiffusionBody;
}): TCard => {
  const card = {
    ...mapKeys(data.meta, (_, key) => camelCase(key)),
    output: data.output,
  } as TCard;

  return card;
};
