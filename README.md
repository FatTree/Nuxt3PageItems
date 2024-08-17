# Nuxt3PageItems

**圖片放這邊.....**
這次要做一個大家做作品集必經的電商網站，主要功能會有：
* Landing Page
* Product List
* Product Datail
* Shopping Cart
* Purchase Order

第二階段想透過會員驗證功能實作`middleware`
* Signin/Login
* Membership Management

Reference:
* 專案的UI/UX設計是參考：[台灣虎航](https://tigerselect.tigerairtw.com/category/1/%E8%99%8E%E8%BF%B7%E6%94%B6%E8%97%8F?page=1)
* 產品內容資訊API reference 是參考：[dummyjson](https://dummyjson.com/products)
  
## 使用技術
* **前端框架**：`VUE3`, `NUXT3`
* **Style**: `scss`, `RWD`
* **Other**：`TypeScript`, `Pinia`, `VueRouter`, `SEO`, `i18n`, lazy Loading
* **Unit test**：`Vitest`
* **API**: `OFetch`
* **CI/CD**: 
  * git action $\rightarrow$ unit test
  * git action $\rightarrow$ deploy to git page


## 功能/UI block
* RWD
* Layout
  * Nab Bar
  * Content
  * Footer
* Nav Bar
  * Logo
  * Product Category
  * Shopping Cart
  * Languages (partial)
    * CH
    * EN
  * Currency (partial)
    * NTD
    * USD
    * CAD
* Content
  * Landing Page
    * Slide
    * Categories Hightlines
  * Product List: [API](https://dummyjson.com/products), UI ref [tigerselect](https://tigerselect.tigerairtw.com/category/5/LOGO%E5%95%86%E5%93%81?page=1)
    * Project List
      * Default: all products
    * Filter Box
      * By Category
      * By product title
      * By tag
      * By rating
      * Clean filter
    * Order by price
  * Product Detail: [API](https://dummyjson.com/products/1), UI ref: [tigerselect](https://tigerselect.tigerairtw.com/5/product/9e03ff97-a4b0-4494-8243-51ec31d9f9ce/%E5%8F%B0%E7%81%A3%E8%99%8E%E8%88%AA%E9%A3%9B%E6%A9%9F%E9%80%A0%E5%9E%8B%E7%AD%86)
  * Purchase Details: UI ref: [tigerselect](https://tigerselect.tigerairtw.com/shopping-cart)
    * Item List
    * Item
      * Quantity
        * +/-
      * Delete
      * total price
    * Total
      * Total item price
      * Tax
      * Total price
      * Purchase Order
* Footer: Static info

## 專案架構
```
```

