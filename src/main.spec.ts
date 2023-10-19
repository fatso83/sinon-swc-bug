import "./init";

import * as Other from "./other";

import { expect } from "chai";
import { main } from "./main";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("main", () => {

  it("should inject a stub using Sinon's auto-cleanup", () => {
    const mocked = sandbox.fake.returns("mocked");

    // replace.usingAccessor is not available on DT per Sinon 16.1
    (sandbox.replace as any).usingAccessor(Other.mock,'toBeMocked',  mocked)
    const spy = sandbox.spy(console, 'log')
    main();
    expect(mocked.called).to.be.true;
    expect(spy.firstCall.args[0]).to.equal("mocked")
    sandbox.restore();
    expect(Other.toBeMocked()).to.equal("I am the original function");
  });
});
