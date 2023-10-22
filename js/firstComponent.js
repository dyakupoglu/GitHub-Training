function firstComponent(lang) {
  switch (lang) {
    case "TR":
      return console.info("Dil Türkçe olarak değiştirildi.");
      break;
    case "EN":
      return console.info("The language is changed to English.");
      break;
    case "GR":
      return console.info("Die Sprache wird auf Deutsch geändert.");
      break;

    default:
      return console.error(
        "There is no any entered language. The language is setted with default: 'EN'"
      );
      break;
  }
}
