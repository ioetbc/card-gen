import {IdealPostcodeAddress} from "@/app/types";
import {isValid} from "postcode";

type Meta = {
  line1: string;
  line2: string;
  city: string;
  country: string;
  postcode: string;
};

type Address = {
  label: string;
  value: string;
  meta: Meta;
};

export async function POST(request: Request) {
  try {
    const {postcode} = await request.json();
    const isValidPostcode = isValid(postcode);
    if (!isValidPostcode) return [];

    // const response = await fetch(
    //   `https://api.ideal-postcodes.co.uk/v1/postcodes/${encodeURIComponent(
    //     postcode
    //   )}?api_key=${IDEAL_POSTCODES_API_KEY}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   }
    // );

    // if (response.status === StatusCodes.NOT_FOUND) return [];

    // const data: IdealPostcodeAddress = await response.json();

    // const addresses = data.result.map<Address>((address) => ({
    //   label: `${address.line_1}, ${address.post_town}, ${address.postcode}`,
    //   value: `${address.line_1}, ${address.post_town}, ${address.postcode}`,
    //   meta: {
    //     line1: address.line_1,
    //     line2: address.line_2,
    //     city: address.county,
    //     country: address.country,
    //     postcode: address.postcode,
    //   },
    // }));

    const addresses = [
      {
        label: "1 Test Street, Test Town, AB1 2CD",
        value: "1 Test Street, Test Town, AB1 2CD",
        meta: {
          line1: "1 Test Street",
          line2: "",
          city: "Test Town",
          country: "UK",
          postcode: "AB1 2CD",
        },
      },
    ];

    return new Response(
      JSON.stringify({
        addresses,
      }),
      {
        headers: {"Content-Type": "application/json"},
      }
    );
  } catch (cause) {
    throw new Error("error calling ideal postcodes", {cause});
  }
}
