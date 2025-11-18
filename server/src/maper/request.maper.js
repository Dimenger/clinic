export const requestMaper = (data) => ({
  id: data._id.toHexString(),
  name: data.name,
  phone: data.phone,
  description: data.description,
  date: data.createdAt.toISOString().slice(0, 10),
  time: data.createdAt.toISOString().slice(11, 19),
});
