/**
 * @param {string} url 
 * @param {string} target 
 */
function open(url, target = "_blank") {
    return () => window.open(url, target);
}

export default open;