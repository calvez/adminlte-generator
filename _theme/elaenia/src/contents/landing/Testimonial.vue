<template>
    <div class="section-padding" id="testimonial">
        <div class="container">
            <div class="row py-lg-5 justify-content-center">
                <div class="col-xl-7">
                    <div class="section_heading">
                        <span>What's Say</span>
                        <h3>Trusted by 2 million customers</h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-8 col-md-11">
                    <div class="testimonial-content">
                        <carousel
                            :per-page="1"
                            :loop="true"
                            :navigation-enabled="true"
                            :pagination-enabled="false"
                            navigation-prev-label="<i class='la la-arrow-left'></i>"
                            navigation-next-label="<i class='la la-arrow-right'></i>"
                        >
                            <slide>
                                <div class="row align-items-center">
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-img">
                                            <img class="img-fluid" src="/images/testimonial/1.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-review">
                                            <img class="img-fluid" src="/images/brand/2.webp" alt="">
                                            <p>Integrating Elaenia services into Trezor Wallet's exchange has been a
                                                great success for all parties, especially the users.
                                            </p>
                                            <div class="customer-info">
                                                <h5>Mr John Doe</h5>
                                                <p>CEO, Example Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="row align-items-center">
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-img">
                                            <img class="img-fluid" src="/images/testimonial/2.jpg" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-review">
                                            <img class="img-fluid" src="/images/brand/3.webp" alt="">
                                            <p>MEW is excited to bring Elaenia’s extensive range of crypto assets,
                                                competitive rates and seamless swap functionality</p>
                                            <div class="customer-info">
                                                <h5>Mr Abraham</h5>
                                                <p>CEO, Example Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {Carousel, Slide}
    }
</script>