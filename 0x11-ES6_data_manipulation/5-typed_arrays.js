// returns a new ArrayBuffer with an Int8 value at a specific position.
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, 10);

  try {
    view.setInt8(position, value);
    return view;
  } catch (err) {
    throw Error('Position outside range');
  }
}
