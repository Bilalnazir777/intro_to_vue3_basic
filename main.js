const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updatecart(id) {
      this.cart.push(id);
    },
    delFromCart(id) {
      const index = this.cart.indexOf(id);
      if (index > -1) {
        this.cart.splice(index, 1);
      }
      //   this.cart = this.cart.filter((itemId) => itemId != id);
    },
  },
});
