import { Request, Response } from "express";
import { updateClient, detailClient } from "../../services/client";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detailClient(id))) {
    return response.status(404).json({
      code: 404,
      message: "Client not found",
    });
  }

  const client = await updateClient({ id, ...request.body });

  return response.json(client);
};
