<template>
    <div class="form-group">
        <slot name="label">
            <label class="mr-sm-2">{{ title }}</label>
        </slot>

        <slot :field="field" :validations="validations" :first-error="firstError">
            <textarea
                v-if="type === 'textarea'"
                v-model.trim="validations.$model"
                :id="field"
                :type="type || 'text'"
                class="form-control p-3"
                :name="field"
                :placeholder="placeholder"
                rows="5"
            ></textarea>
            <input
                v-else
                v-model.trim="validations.$model"
                :id="field"
                :type="type || 'text'"
                class="form-control"
                :name="field"
                :placeholder="placeholder"
            />
        </slot>

        <label v-if="invalid" class="error" :for="field">{{ firstError }}</label>
    </div>
</template>

<script>
    const errorMessages = {
        required: 'This field is required',
        email: 'Please enter a valid email address',

        minLength() {
            return `This field must be at least ${this.minLength.min} characters long`;
        }
    };

    export default {
        props: ['title', 'field', 'validations', 'type', 'placeholder', 'customErrors'],

        computed: {
            invalid() {
                return this.validations.$dirty && this.validations.$invalid;
            },

            firstError(field) {
                for (let rule in this.validations.$params) {
                    if (!this.validations[rule]) {
                        let error = this.customError(rule) || errorMessages[rule];
                        return typeof error === 'function'
                            ? error.bind(this.validations.$params)() : error;
                    }
                }
            },
        },

        methods: {
            customError(rule) {
                return this.customErrors ? this.customErrors[rule] : null;
            }
        }
    }
</script>