export default function defaultDomain({
  steps,
  scale,
}: {
  steps: number;
  scale: any;
}) {
  // returns domain passed into scale function
  const domain = scale.domain();
  console.log(domain);
  // steps = 5
  const increment = (domain[domain.length - 1] - domain[0]) / (steps - 1);
  const result = new Array(5);
  result[0] = domain[0];
  for (let i = 1; i < steps; i++) {
    result[i] = result[i - 1] + increment;
  }
  return result;
}
