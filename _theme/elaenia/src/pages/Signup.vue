<template>
    <form-page>
        <template #header>
            <h4 class="card-title">Sign up your account</h4>
        </template>

        <form @submit.prevent="submit" name="myform" class="signup_validate">
            <validate-field
                title="Username"
                field="username"
                :validations="$v.username"
                placeholder="username"
            />

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

            <div class="text-center mt-4">
                <button type="submit" class="btn btn-success btn-block">Sign up</button>
            </div>
        </form>
        <div class="new-account mt-3">
            <p>Already have an account? <router-link class="text-primary" to="sign-in">Sign in</router-link>
            </p>
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
                username: '',
                email: '',
                password: '',
                customErrors: {
                    username: {required: 'Please enter your username'},
                    password: {required: 'Please provide a password'}
                }
            }
        },

        validations: {
            username: {required},
            email: {required, email},
            password: {required, minLength: minLength(5)},
        },

        methods: {
            submit() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.$router.push('sign-in');
                }
            }
        }
    }
</script>