<template>
    <div class="section-padding" id="contact">
        <div class="container">
            <div class="row py-lg-5 justify-content-center">
                <div class="col-xl-7">
                    <div class="section_heading">
                        <span>Ask Question</span>
                        <h3>Let us hear from you directly!</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-sm-4">
                    <div class="info-list">
                        <h4 class="mb-3">Address</h4>
                        <ul>
                            <li><i class="fa fa-map-marker"></i> California, USA</li>
                            <li><i class="fa fa-phone"></i> (+880) 1243 665566</li>
                            <li><i class="fa fa-envelope"></i> hello@example.com</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-8 col-md-8 col-sm-8">
                    <form @submit.prevent="submit" name="myform" class="contact_validate">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <validate-field
                                    title="Full Name"
                                    field="full-name"
                                    :validations="$v.fullName"
                                    :custom-errors="customErrors.fullName"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div class="col-12 col-md-6">
                                <validate-field title="Email" field="email" :validations="$v.email" placeholder="hello@domain.coms"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <validate-field type="textarea" field="message" :validations="$v.message" placeholder="Tell us what we can help you with!">
                                    <template #label><label v-show="false"></label></template>
                                </validate-field>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary px-4">
                            Send message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import validateField from '@app/components/ValidateField.vue';
    import {required, email} from 'vuelidate/lib/validators';

    export default {
        components: {validateField},

        data() {
            return {
                fullName: '',
                email: '',
                message: '',
                customErrors: {
                    fullName: {required: 'Please enter your full name'},
                }
            }
        },

        validations: {
            fullName: {required},
            email: {required, email},
            message: {required},
        },

        methods: {
            submit() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.$router.go(0);
                }
            }
        }
    }
</script>