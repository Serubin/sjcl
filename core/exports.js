if(typeof module !== 'undefined' && module.exports){
  module.exports = sjcl;
}
if (typeof define === "function") {
    define([], function () {
        return sjcl;
    });
}
if(typeof window !== 'undefined') {
  window['sjcl'] = sjcl;
}
