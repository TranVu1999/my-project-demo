const root = document.documentElement;
const inputs = [].slice.call(document.querySelectorAll('input'));

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate(e) {
  if (this.id === 'hue-0') root.style.setProperty('--hue-0', this.value);
  if (this.id === 'hue-1') root.style.setProperty('--hue-1', this.value);
  if (this.id === 'hue-2') root.style.setProperty('--hue-2', this.value);
  if (this.id === 'hue-3') root.style.setProperty('--hue-3', this.value);
  if (this.id === 'saturation') root.style.setProperty('--sat', this.value);
  if (this.id === 'lightness') root.style.setProperty('--light', this.value);
}