// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      country: {
        england: {
          epl: {
            club: {
              chelsea: {
                Team_Name: "Chelsea",
                players: [
                  {
                    name: "Kovacics",
                    position: "Attack",
                    shirt_number: 9,
                    country: "England",
                    height: "10.9",
                  },
                ],
              },
            },
          },
        },
        italy: {},

        germany: {},
      },
      table: {
        club: "England",
      },
    },
  ]);
}
