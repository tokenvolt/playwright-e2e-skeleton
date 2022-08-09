import { Reporter } from "@playwright/test/reporter"

class TestRailReporter implements Reporter {
  onBegin(config, suite) {
    // console.log(`Starting the run with ${suite.allTests().length} tests`)
  }

  onTestBegin(test) {
    // console.log(`Starting test`, test)
  }

  onTestEnd(test, result) {
    // console.log(`Ending test`, test)
  }

  onEnd(result) {
    // console.log(`Finished the run: ${result.status}`, result)
  }
}

export default TestRailReporter
