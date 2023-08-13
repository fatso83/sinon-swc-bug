import "./init";

import * as Other from "./other";

import { expect } from "chai";
import { main } from "./main";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("main", () => {
  let mocked;
  let original = Other.toBeMocked;

  after(() => Other._setToBeMocked(original))

  it("should mock", () => {
    mocked = sandbox.stub().returns("mocked");
    Other._setToBeMocked(mocked)
    main();
    expect(mocked.called).to.be.true;
  });
});
