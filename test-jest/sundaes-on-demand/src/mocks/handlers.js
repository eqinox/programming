import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:1330", (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "cholocalte", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
];
