module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["support/**/*.ts", "pages/**/*.ts", "steps/**/*.ts"],
    format: ["progress", "html:../reports/e2e-report.html"],
    timeout: 60000
  }
};
