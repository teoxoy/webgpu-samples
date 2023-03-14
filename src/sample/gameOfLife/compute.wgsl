@binding(0) @group(0) var<storage, read> size: vec2<u32>;
@binding(1) @group(0) var<storage, read> current: array<u32>;
@binding(2) @group(0) var<storage, read_write> next: array<u32>;

fn getIndex(x: u32, y: u32) -> u32 {
  let h = size.y;
  let w = size.x;

  return (y % h) * w + (x % w);
}

fn getCell(x: u32, y: u32) -> u32 {
  return current[getIndex(x, y)];
}

fn countNeighbors(x: u32, y: u32) -> u32 {
  return getCell(x - 1u, y - 1u) + getCell(x, y - 1u) + getCell(x + 1u, y - 1u) + 
         getCell(x - 1u, y) +                           getCell(x + 1u, y) + 
         getCell(x - 1u, y + 1u) + getCell(x, y + 1u) + getCell(x + 1u, y + 1u);
}

@compute @workgroup_size(8u, 8u)
fn main(@builtin(global_invocation_id) grid: vec3<u32>) {
  let x = grid.x;
  let y = grid.y;
  let n = countNeighbors(x, y);
  next[getIndex(x, y)] = select(u32(n == 3u), u32(n == 2u || n == 3u), getCell(x, y) == 1u); 
} 
