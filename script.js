const token = "QVZHMDAwMDAwVWhzTDYzeTNadnlIdkdCSnR0emh2LzZnaXlrYUF3Q29YdVFTM050YjdkZkNyRzE5S2xYOWF3WHZIbHE3T1RWK0x6NnJianovY3JVY3hxTERiSjQyTUU2QlJJTUV4ZVZKeU16KzF0UVZ1SmpmU0svNWZzZUdmRTZpczd5VURCZVBiZ21WSXRnSHNtUStwZFpFUHNZWkhDZ1hQQT09";
const newUrl = window.location.origin + window.location.pathname + "?pctoken=" + encodeURIComponent(token);
window.history.replaceState({}, "", newUrl);

function queryNestedShadow(root, selector) {
  let results = [];
  if (!root) return results;
  results.push(...root.querySelectorAll(selector));
  const shadowHosts = root.querySelectorAll('*');
  shadowHosts.forEach(el => {
    if (el.shadowRoot) {
      results.push(...queryNestedShadow(el.shadowRoot, selector));
    }
  });
  return results;
}
function waitForCardBodies() {
  const prefCenter = document.querySelector('preference-center');
  if (!prefCenter || !prefCenter.shadowRoot) {
    setTimeout(waitForCardBodies, 100);
    return;
  }
  const cardBodies = queryNestedShadow(prefCenter.shadowRoot, '.slds-card__body');
  if (cardBodies.length > 0) {
    console.log('Found card bodies:', cardBodies);
    cardBodies.forEach((el, idx) => {
      el.innerHTML = '<div><div>Unsubscribe</div><div>Use the form below to opt out of all non-transactional emails.</div></div>'+el.innerHTML;
      console.log(`Card ${idx} innerHTML:`, el.innerHTML);
    });
  } else {
    setTimeout(waitForCardBodies, 100);
  }
}
waitForCardBodies();
