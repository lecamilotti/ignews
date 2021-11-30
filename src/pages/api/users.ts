import { NextApiRequest, NextApiResponse } from "next";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Joe" },
    { id: 2, name: "Mary" },
    { id: 3, name: "Mike" },
  ];

  return response.json(users);
};
