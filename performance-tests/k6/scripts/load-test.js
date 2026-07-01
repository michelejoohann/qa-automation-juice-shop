import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 5 },
    { duration: "1m", target: 10 },
    { duration: "30s", target: 0 }
  ],
  thresholds: {
    http_req_failed: ["rate<0.05"],
    http_req_duration: ["p(95)<1500"]
  }
};

const BASE_URL = __ENV.BASE_URL || "http://localhost:3000";

export default function () {
  const response = http.get(`${BASE_URL}/rest/products/search?q=apple`);

  check(response, {
    "status deve ser 200": (res) => res.status === 200,
    "resposta deve conter dados": (res) =>
      res.body !== null && res.body.includes("data")
  });

  sleep(1);
}