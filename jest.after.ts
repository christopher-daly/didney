import '@testing-library/jest-dom'
import "@jest/globals";

import { server } from "./mocks/server";

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())