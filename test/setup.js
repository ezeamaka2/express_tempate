import supertest from "supertest";
import chai from "chai";
import sionChai from "sinon-chai";
import app from "../src/app";

chai.use(sionChai);
export const { expect } = chai;
export const server = supertest.agent(app);
export const BASE_URL = "/v1";
