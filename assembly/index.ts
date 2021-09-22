// The entry file of WebAssembly module.

export function versus(us: f64, them: f64, advUs: f64, advThem: f64): f64 {
  let forceMultiplier = 1.0;

  const deltaAdv = advUs - advThem;

  if (deltaAdv > 0) {
    forceMultiplier = 2 * Math.log(Math.abs(deltaAdv) + 1);
  } else if (deltaAdv < 0) {
    forceMultiplier = 1 / (2 * Math.log(Math.abs(deltaAdv) + 1));
  }

  const forceRatio = (us / them) * forceMultiplier;

  // overwhelmed limit when They outnumber Us one thousand to one
  if (forceRatio < 0.001) {
    return 0.0005;
  }

  //overwhelming limit when We outnumber Them one thousand to one
  else if (forceRatio > 1000) {
    return 0.9995;
  }

  // lower interval force-ratio < 1
  else if (forceRatio < 1) {
    return forceRatio / 2;
  }

  // higher interval force-ratio > 2
  else if (forceRatio > 2) {
    return 1 - 1 / (2 * forceRatio);
  }

  // middle interval 1 ≤ force-ratio ≤ 2
  else {
    return (forceRatio + 1) / 4;
  }
}
