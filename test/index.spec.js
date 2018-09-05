var chai = require("chai");
var text = require("../index");
var expect = chai.expect;

describe("text", function () {
  describe("#getLinksFromMd", function () {
    describe("Quando nao houver parametro", function () {
      it(" deve lancar um erro:", function () {
        var verification = function () {
          text.getLinksFromMd("")
        };
        expect(verification).to.throw("é necessário um texto (em formato Markdown) para extrair todos os links");
        });
	})

    describe("Quando o texto for um numero ", function () {
      it("deve lancar um erro:", function () {
        var verification = function () {
          text.getLinksFromMd(1243546)
        };
        expect(verification).to.throw("é necessário um texto (em formato Markdown) para extrair todos os links");
      });
    })

    describe("Quando o texto for uma string e nao houver url", function () {
      it(" deve retornar um array vazio", function () {
        expect(text.getLinksFromMd("Lorem ipsum dolor sit amet")).to.be.an('array');
      });
    })

    describe("Quando o texto for uma string ", function () {
      describe("e houver uma url", function () {
        it("deve retornar um array com o objeto com a url e o link do markdown.", function () {
          expect(text.getLinksFromMd("[google](www.google.com) Lorem ipsum dolor sit amet")).to.deep.equal([ { href: 'www.google.com', text: 'google' } ]);
          expect(text.getLinksFromMd("Lorem ipsum [google](www.google.com) dolor sit amet")).to.deep.equal([ { href: 'www.google.com', text: 'google' } ]);
        });
      });

    describe("e houver tres urls diferentes", function () {
      it("deve retornar o objeto dentro do array.", function () {
        expect(text.getLinksFromMd("consectetur adipiscing [google](www.google.com), sed do eiusmod tempor  incididunt [uol](www.uol.com) et [terra](www.terra.com) magna aliqua.")).to.deep.equal([{href: 'www.google.com', text: 'google'}, {href: 'www.uol.com', text: 'uol'}, {href: 'www.terra.com', text: 'terra'} ]);
      });
    });
			
    })
  });
});