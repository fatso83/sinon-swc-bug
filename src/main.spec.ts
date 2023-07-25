import sinon from "sinon";
import "./init";
import * as Other from "./other";
import { main } from "./main";
import { expect } from "chai";

const sandbox = sinon.createSandbox();

describe("main", () => {
  let mocked;
  it("should mock", () => {
    mocked = sandbox.stub(Other, "toBeMocked").returns("mocked");
    main();
    expect(mocked.called).to.be.true;
  });
});
