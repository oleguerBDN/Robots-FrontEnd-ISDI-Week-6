import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_URL_API, async (req, res, ctx) => {
    const response = res(
      ctx.json([
        {
          features: {
            speed: 7,
            resistance: 8,
            birth: "2021-10-09T00:00:00.000Z",
          },
          id: "6185993022dd92661d3cfca6",
          name: "pepe",
          img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
        },
        {
          features: {
            speed: 1,
            resistance: 1,
            birth: "1998-10-09T00:00:00.000Z",
          },
          id: "61859b1a72845edffd042108",
          name: "jose",
          img: "https://lanetaneta.com/wp-content/uploads/2019/10/%C2%BFQuieres-125k-Solo-done-su-cara-a-algunos-robots.0337xh&resize=1200:*.jpeg",
          __v: 0,
        },
      ])
    );
    return response;
  }),
  rest.delete(
    process.env.REACT_APP_URL_API + "delete/" + ":idRobot",
    async (req, res, ctx) => {
      const response = res(ctx.status(200), ctx.json({}));
      return response;
    }
  ),
  rest.post(process.env.REACT_APP_URL_API + "create", async (req, res, ctx) => {
    const response = res(
      ctx.status(201),
      ctx.json({
        features: {
          speed: 7,
          resistance: 8,
          birth: "2021-10-09T00:00:00.000Z",
        },
        id: "6185993022dd925261d3cfca6",
        name: "newRobot",
        img: "img",
      })
    );
    return response;
  }),
];
