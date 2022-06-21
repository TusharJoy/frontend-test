<template>
  <section class="subscription bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="subscription-wrapper">
            <div
              class="d-flex subscription-content justify-content-between align-items-center flex-column flex-md-row text-center text-md-left"
            >
              <h3 class="flex-fill">
                Subscribe <br />
                to our Mailer Lite newsletter
              </h3>
              <form class="row flex-fill" @submit.prevent="submitForm">
                <div class="col-lg-7 my-md-2 my-2">
                  <input
                    id="email"
                    v-model="email"
                    type="email"
                    class="form-control px-4 border-0 w-100 text-center text-md-left"
                    placeholder="Your Email"
                    name="email"
                    required
                  />
                </div>
                <div class="col-lg-7 my-md-2 my-2">
                  <input
                    id="name"
                    v-model="name"
                    type="text"
                    class="form-control px-4 border-0 w-100 text-center text-md-left"
                    placeholder="Your Name"
                    name="name"
                    required
                  />
                </div>
                <div class="col-lg-5 my-md-2 my-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg border-0 w-100"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import apiUrls from "@/config/apiUrls";
import { genericService } from "@/services/generic.service";

export default {
  name: "NewsLetter",
  data() {
    return {
      email: "",
      name: "",
    };
  },
  methods: {
    submitForm() {
      const model = genericService.create(apiUrls.CREATE_SUBSCRIBER);

      model({
        email: this.email.trim(),
        name: this.name.trim(),
      })
        .then((r) => {
          console.log(r.data.data);
          this.$store.dispatch(
            "alert/success",
            `congrats you are subscribed to newsletter`
          );
        })
        .catch((e) => {
          this.$store.dispatch(
            "alert/error",
            `Unable to create the subscriber, please try again!`
          );
        });
    },
  },
};
</script>
<style scoped>
.subscription.bg-white {
  background: none;
}

.bg-white {
  background-color: #fff !important;
}

.subscription.bg-white .subscription-wrapper {
  background: #fff;
}

.subscription-wrapper {
  border-radius: 0% 5% 10% 3%/10% 20% 0% 17%;
  -webkit-transform: perspective(1800px) rotateY(20deg) skewY(1deg)
    translateX(50px);
  transform: perspective(1800px) rotateY(20deg) skewY(1deg) translateX(50px);
  padding: 70px 50px;
  z-index: 1;
  width: 100%;
  background: linear-gradient(80deg, #0030cc 0%, #00a4db 100%);
  position: absolute;
  top: 100px;
}

.subscription-wrapper {
  box-shadow: 0px 15px 39px 0px rgba(8, 18, 109, 0.1) !important;
}

.subscription-content {
  -webkit-transform: skewY(-1deg);
  transform: skewY(-1deg);
}

h3,
.h3 {
  font-size: 30px;
}

.flex-fill {
  -ms-flex: 1 1 auto !important;
  flex: 1 1 auto !important;
}

.subscription.bg-white .form-control {
  border: 1px solid #ebebeb !important;
}

.subscription-wrapper .form-control {
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 45px;
}

.subscription-wrapper .form-control:focus {
  background: rgba(255, 255, 255, 0.1);
  outline: 0;
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn-primary {
  border: 0;
  color: #fff;
}

.btn {
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  padding: 18px 45px;
  border-radius: 45px;
  font-weight: 500;
  border: 1px solid;
  position: relative;
  z-index: 1;
  transition: 0.3s ease-in;
  overflow: hidden;
}

.btn-primary:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 102%;
  height: 100%;
  background: linear-gradient(45deg, #00a8f4 0%, #02d1a1 100%);
  z-index: -1;
  transition: ease 0.3s;
}
</style>
