const token = "QVZHMDAwMDAwVWhzTDYzeTNadnlIdkdCSnR0emh2LzZnaXlrYUF3Q29YdVFTM050YjdkZkNyRzE5S2xYOWF3WHZIbHE3T1RWK0x6NnJianovY3JVY3hxTERiSjQyTUU2QlJJTUV4ZVZKeU16KzF0UVZ1SmpmU0svNWZzZUdmRTZpczd5VURCZVBiZ21WSXRnSHNtUStwZFpFUHNZWkhDZ1hQQT09";
const params = new URLSearchParams(window.location.search);
if (!params.has('pctoken')) {
  const url = new URL(window.location.href);
  url.searchParams.set("pctoken", token);
  window.location.href = url.href;
}
