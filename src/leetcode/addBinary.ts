function addBinary(a: string, b: string): string {
  const maxLength = a.length > b.length ? a.length : b.length;
  const tmpA = [...a];
  const tmpB = [...b];
  let carry = undefined;

  let result = "";

  for (let i = maxLength - 1; i >= 0; i--) {
    const x = tmpA.pop();
    const y = tmpB.pop();

    if (carry) {
      const res = binarySum(x, carry);
      result = `${res.res}${result}`;
      carry = res.carry;
      continue;
    }

    const res = binarySum(x, y);

    result = `${res.res}${result}`;
    carry = res.carry;
  }
  console.log("carry:", carry);
  return `${carry ? carry : ""}${result}`;
}

function binarySum(a: string = "0", b: string = "0") {
  if (a === "0" && b === "0") return { res: "0" };
  if (a === "0" && b === "1") return { res: "1" };
  if (a === "1" && b === "0") return { res: "1" };
  if (a === "1" && b === "1") return { res: "0", carry: "1" };
}

const a = "1111",
  b = "1111";

console.log(addBinary(a, b));
