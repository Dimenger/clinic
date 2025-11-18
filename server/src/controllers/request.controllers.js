import { Request } from "../models/Request.js";
import { requestMaper } from "../maper/request.maper.js";

export const getRequests = async () => {
  try {
    const req = await Request.find();
    if (!req) {
      throw new Error("The list is empty!");
    }
    const mapedReq = req.map(requestMaper);
    return mapedReq;
  } catch (error) {
    throw error;
  }
};

export const addRequest = async (data) => {
  try {
    await Request.create({
      name: data.name,
      phone: data.phone,
      description: data.description,
    });
  } catch (error) {
    console.error(error);
  }
};
