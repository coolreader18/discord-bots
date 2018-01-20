module.exports = () => ({
  canonical: [
    ({htmlDom: $}) => $('link[rel=canonical]').attr('href')
  ]
})
