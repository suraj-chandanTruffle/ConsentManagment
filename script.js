const token = "QVZHMDAwMDAwVWhzTDYzeTNadnlIdkdCSnR0emh2LzZnaXlrYUF3Q29YdVFTM050YjdkZkNyRzE5S2xYOWF3WHZIbHE3T1RWK0x6NnJianovY3JVY3hxTERiSjQyTUU2QlJJTUV4ZVZKeU16KzF0UVZ1SmpmU0svNWZzZUdmRTZpczd5VURCZVBiZ21WSXRnSHNtUStwZFpFUHNZWkhDZ1hQQT09";
const newUrl = window.location.origin + window.location.pathname + "?pctoken=" + encodeURIComponent(token);
window.history.replaceState({}, "", newUrl);

function queryNestedShadow(root, selector) {
  let results = [];
    console.log('queryNestedShadow');

  if (!root) return results;

  // Direct query
  results.push(...root.querySelectorAll(selector));

  // Traverse nested shadow roots
  const shadowHosts = root.querySelectorAll('*');
  shadowHosts.forEach(el => {
    if (el.shadowRoot) {
      results.push(...queryNestedShadow(el.shadowRoot, selector));
    }
  });

  return results;
}

// Polling function to wait until elements exist
function waitForCardBodies() {
  const prefCenter = document.querySelector('preference-center');

  if (!prefCenter || !prefCenter.shadowRoot) {
    console.log('prefCenter');
    setTimeout(waitForCardBodies, 100);
    return;
  }

  const cardBodies = queryNestedShadow(prefCenter.shadowRoot, '.slds-card__body');

  if (cardBodies.length > 0) {
    console.log('Found card bodies:', cardBodies);
    cardBodies.forEach((el, idx) => {
      console.log(`Card ${idx} innerHTML:`, el.innerHTML);
    });
  } else {
        console.log('shadowRoot');
    // Try again if not found yet
    setTimeout(waitForCardBodies, 100);
  }
}

// Start waiting
waitForCardBodies();
