<template>
    <form-page>
        <template #header>
            <h4 class="card-title">Sign in</h4>
        </template>

        <form @submit.prevent="submit" class="signin_validate">
            <validate-field
                title="Email"
                field="email"
                :validations="$v.email"
                placeholder="hello@example.com"
            />

            <validate-field
                type="password"
                title="Password"
                field="password"
                :custom-errors="customErrors.password"
                :validations="$v.password"
            />

            <div class="form-row d-flex justify-content-between mt-4 mb-2">
                <div class="form-group mb-0">
                    <label class="toggle">
                        <input class="toggle-checkbox" type="checkbox">
                        <div class="toggle-switch"></div>
                        <span class="toggle-label">Remember me</span>
                    </label>
                </div>
                <div class="form-group mb-0">
                    <router-link to="reset">Forgot Password?</router-link>
                </div>
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-success btn-block">Sign in</button>
            </div>
        </form>
        <div class="new-account mt-3">
            <p>Don't have an account? <router-link class="text-primary" to="sign-up">Sign
                up</router-link></p>
        </div>
    </form-page>
</template>

<script>
    import formPage from '@app/components/FormPage.vue';
    import {required, email, minLength} from 'vuelidate/lib/validators';
    import validateField from '@app/components/ValidateField.vue';

    export default {
        components: {validateField, formPage},

        data() {
            return {
                email: '',
                password: '',
                customErrors: {
                    password: {required: 'Please provide a password'}
                }
            }
        },

        validations: {
            email: {required, email},
            password: {required, minLength: minLength(5)},
        },

        methods: {
            submit() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.$router.push('otp-1');
                }
            }
        }
    }
</script>