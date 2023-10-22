function firstComponent(lang) {
  switch (lang) {
    case "TR":
      return console.info("Dil Türkçe olarak değiştirildi.");
      break;
    case "EN":
      return console.info("The language is changed to English.");
    default:
      break;
  }
}
