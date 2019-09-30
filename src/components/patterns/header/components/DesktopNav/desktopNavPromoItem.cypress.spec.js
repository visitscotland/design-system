const VsDesktopNavPromoItem = require("./DesktopNavPromoItem.vue").default
const { vueHelper } = require("@cypress/helpers/index.js").default
const sizes = ["iphone-6", "ipad-2", [1024, 768]]
const mainNav = require("@/assets/fixtures/header/mainNav.json")
const promoItem = mainNav[2].promoItem

const props = {
  href: promoItem.href,
  isExternal: promoItem.isExternal,
  title: promoItem.title,
  buttonText: promoItem.buttonText,
  description: promoItem.description,
  imageLink: promoItem.imageLink,
}

vueHelper.init("vs-desktop-nav-promo-item", VsDesktopNavPromoItem, { props })

describe("Desktop Nav List Item component", () => {
  sizes.forEach(size => {
    context(`${size} resolution`, () => {
      beforeEach(() => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])
        } else {
          cy.viewport(size)
        }
      })

      it("should render a list item", () => {
        cy.get('[data-test="desktop-nav-list-item"]').should("be.visible")
      })

      it("should render a link element", () => {
        cy.get('[data-test="promo-link"]').should("be.visible")
      })

      it("should render an href", () => {
        cy.get('[data-test="promo-link"]').should(
          "have.attr",
          "href",
          "https://www.visitscotland.com/see-do/iconic-scotland/ben-nevis"
        )
      })

      it("should render a title", () => {
        cy.get('[data-test="promo-link"]').should("contain", "Scotland's Tallest Peak")
      })

      it("should render a promo image", () => {
        cy.get('[data-test="promo-image"]')
          .should("be.visible")
          .should(
            "have.attr",
            "src",
            "https://cimg.visitscotland.com/cms-images/destinations/outer-hebrides/isle-of-lewis?size=sm"
          )
      })

      it("should render alt text for the promo image that is the same as the title", () => {
        cy.get('[data-test="promo-image"]').should("have.attr", "alt", "Scotland's Tallest Peak")
      })

      it("should render an icon", () => {
        cy.get('[data-test="svg-icon"]').should("be.visible")
      })
    })
  })
})
