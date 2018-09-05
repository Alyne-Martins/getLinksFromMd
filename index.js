module.exports.getLinksFromMd = function getLinksFromMd(text) {
  if (typeof text !== "string" || text == ""){
    throw new Error ("é necessário um texto (em formato Markdown) para extrair todos os links"); 
  }else {
    let regex_url = new RegExp(/(?<=\().*?(?=\))/g);	
    let regex_text = new RegExp(/(?<=\[).*?(?=\])/g);
    let getUrl = text.match(regex_url);
    let getTex = text.match(regex_text);
    let getLink = [];
    if (getUrl === null && getTex === null) {
      return getLink;
    }else {
      getLink = getUrl.map((a, b) => ({
        "href": getUrl[b],
        "text": getTex[b]
      }));
      return getLink;
    }  
  }	
};