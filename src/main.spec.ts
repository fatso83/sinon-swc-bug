import "./init";

import * as Other from "./other";

import { expect } from "chai";
import { main } from "./main";
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("main", () => {
  it("should mock", () => {
      console.log('Other descriptors', Object.getOwnPropertyDescriptors(Other))
      const stub = sandbox.stub().returns("mocked")
      sandbox.replaceGetter(Other, "toBeMocked", () => stub)

    main();
    expect(stub.called).to.be.true;
  });
});
