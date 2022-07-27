app.component("review-form", {
  template:
    /*html*/
    `
    <form class="form-review" @submit.prevent="onSubmit">
    
    <h3>leave a review</h3>
    <label for="name">Name</label>
    <input id="name" v-model="name">

    <label for="review">Review</label>
    <textarea id="review" v-model="review"></textarea>

    <label for="rating"></label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>

    <input class="button" type="submit" value="submit">
    
    </form>`,

  data() {
    return {
      name: "",
      review: "",
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      let productreview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      this.$emit("submitted-review", productreview);
      //clearing data
      (this.name = ""), (this.review = ""), (this.rating = null);
    },
  },
});
