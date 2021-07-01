function getCount(objects) {
  let i = 0;
  for (let key in objects) {
    objects[key].x === objects[key].y ? i++ : null;
  }
  return i;
}

// 더 간단한 방법
const getCount = (objects) => objects.filter((o) => o.x == o.y).length;
