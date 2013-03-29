var Klazz = {
  define : function (klazzname, def_hash) {
    /* TODO: replace stub */
    console.log('Klazz.define: ' + klazzname + ' defined by ' + def_hash);
  },
  new : function (params) {
    return Object.create(Klazz, params);
  }
};
module.exports = Klazz;