import "./init.ts";

import { expect } from "chai";
import * as td from "testdouble";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("main module", () => {
  let mocked, main;

  before(async () => {
    mocked = sandbox.fake.returns("mocked");
    await td.replaceEsm("./other.ts", { toBeMocked: mocked });
    const mainModule = await import("./main.js");
    main = mainModule.main;
  });

  it("should mock", () => {
    main();
    expect(mocked.called).to.be.true;
  });
});
