export default function mockResponse () {
  const res: {
    status?: any,
    json?: any,
    send?: any
  } = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}