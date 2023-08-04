import "./init.js";

import { expect } from "chai";
import quibble from "quibble"
import sinon from "sinon";

const sandbox = sinon.createSandbox();

describe("main module", () => {
  let mocked, main;

    before(async () => {
        mocked = sandbox.fake.returns("mocked")
        await quibble.esm('./other', {toBeMocked: mocked})
        const mainModule = await import("./main.js")
        main = mainModule.main;
        console.log('ferdig setup')
    })

  it("should mock", () => {
      console.log('test starts')
    main();
    expect(mocked.called).to.be.true;
  });
});
