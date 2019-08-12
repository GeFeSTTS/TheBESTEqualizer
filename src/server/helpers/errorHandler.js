export default (res, message, code) => {
  res.status(code || 500).json({ error: message });
};
