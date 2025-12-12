const token = "QVZHMDAwMDAwVWhzTDYzeTNadnlIdkdCSnR0emh2LzZnaXlrYUF3Q29YdVFTM050YjdkZkNyRzE5S2xYOWF3WHZIbHE3T1RWK0x6NnJianovY3JVY3hxTERiSjQyTUU2QlJJTUV4ZVZKeU16KzF0UVZ1SmpmU0svNWZzZUdmRTZpczd5VURCZVBiZ21WSXRnSHNtUStwZFpFUHNZWkhDZ1hQQT09";
const newUrl = window.location.origin + window.location.pathname + "?pctoken=" + encodeURIComponent(token);
window.history.replaceState({}, "", newUrl);
