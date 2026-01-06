function getMessage(): Promise<string> {
  return new Promise<string>((ressolve) => {
    setTimeout(() => {
      ressolve("Hello from TS");
    }, 100);
  });
}

getMessage().then((result) => console.log(result));
