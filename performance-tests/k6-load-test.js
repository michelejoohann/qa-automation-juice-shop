import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 500,
  duration: "5m",
  thresholds: {
    http_req_duration: ["p(95)<1000"],
    http_req_failed: ["rate<0.05"]
  }
};

export default function () {
  const res = http.get("http://localhost:3000/rest/products/search?q=apple");

  check(res, {
    "status é 200": (r) => r.status === 200,
    "tempo menor que 1s": (r) => r.timings.duration < 1000
  });

  sleep(1);
}
