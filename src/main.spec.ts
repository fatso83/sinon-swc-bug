import "./init";

import { expect } from "chai";
import quibble from "quibble";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("main module", () => {
  let mocked, main;

  before(() => {
    mocked = sandbox.stub().returns("mocked"); 
    quibble("./other", { toBeMocked: mocked });
    ({main} = require("./main"));
  });

  it("should mock", () => {
    main();
    expect(mocked.called).to.be.true;
  });
});
