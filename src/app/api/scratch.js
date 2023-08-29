var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  key: process.env.STABLE_DIFFUSION_API_KEY,
  prompt: "a man with a party hat",
  negative_prompt: null,
  init_image:
    "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/upload/original.png",
  mask_image:
    "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/upload/mask+(2).png",
  width: "512",
  height: "512",
  samples: "1",
  num_inference_steps: "30",
  safety_checker: "no",
  enhance_prompt: "yes",
  guidance_scale: 7.5,
  strength: 0.7,
  seed: null,
  webhook: null,
  track_id: null,
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://stablediffusionapi.com/api/v3/inpaint", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
