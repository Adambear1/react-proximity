const { conversion } = require("./conversion");
// comps => subject
function proximity(s, c, id) {
  let i = [];
  c.map((x) => {
    let x = conversion(x.lat, x.lng, s.lat, s.lng);
    x["distance"] = x.toFixed(2);
    i.push(x);
  });
  return id && id === 0
    ? i.reduce((a, b) => a.distance - b.distance)
    : i.reduce((a, b) => b.distance - a.distance);
}
