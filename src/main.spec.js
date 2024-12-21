import "./init.js";

import { expect } from "chai";
import quibble from "quibble";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("main module", () => {
  let mocked, main;

  before(async () => {
    mocked = sandbox.fake.returns("mocked");
    await quibble.esm("./other.js", { toBeMocked: mocked });
    const mainModule = await import("./main.js");
    main = mainModule.main;
  });

  it("should mock", () => {
    main();
    expect(mocked.called).to.be.true;
  });
});
