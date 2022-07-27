app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
  <div class="product-display">
    <div class="product-container">
       <div class="product-image">
          <img :src="image" :class="{'out-of-stock-img': !instock}"/>
       </div>
       <div class="product-info">
        <p v-if="instock">in stock</p>   
        <p v-else>out of stock</p>
        <p v-if="onsale">{{onsale}}</p>
        <p> shipping :{{shipping}}</p>
        <product-details :details="details"></product-details>
        <div
         v-for="(variant,index) in variants"
         :key="variant.id"
         @mouseover="updatevariant(index)"
         class="color-circle"
         :style="{backgroundColor:variant.color}">
       </div>
       <button class="button" :disabled="!instock" :class="{disabledButton:!instock}" @click="incrementCart">Add to cart</button>
       <button class="button"  :disabled="!instock" :class="{disabledButton:!instock}" @click="decrementCart">delete from cart</button>
       <!--shorthand for v-on_-->
       </div>
    </div>
    <review-list :reviews="reviews"></review-list>
    <review-form @submitted-review ="addreview"></review-form>
  
    
</div>
    
  `,
  data() {
    return {
      product: "socks",
      brand: "vue mastery",
      selectedvariant: 0,
      details: [
        { stuff: "imported", manufacturer: "zara" },
        { stuff: "local", manufacturer: "adidas" },
      ],
      variants: [
        {
          id: "1",
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 20,
        },
        {
          id: "2",
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 10,
        },
      ],
      reviews: [],
    };
  },
  methods: {
    incrementCart() {
      this.$emit("increment-cart", this.variants[this.selectedvariant].id);
    },
    decrementCart() {
      this.$emit("decrement-cart", this.variants[this.selectedvariant].id);
    },
    updatevariant(index) {
      this.selectedvariant = index;
      // console.log(index);
    },

    addreview(productreview) {
      this.reviews.push(productreview);
    },
    // log(variant){
    //     console.log(variant)
    // }
  },
  computed: {
    image() {
      return this.variants[this.selectedvariant].image;
    },
    instock() {
      return this.variants[this.selectedvariant].quantity;
    },
    onsale() {
      return this.brand + " " + this.product + " is on sale";
    },
    shipping() {
      if (this.premium) {
        return "free";
      }
      return 3;
    },
  },
});
