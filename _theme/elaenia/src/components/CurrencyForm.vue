<template>
    <form @submit.prevent="submit" name="myform" class="currency_validate">
        <validate-field title="Currency" field="currency" :validations="$v.currency">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text">
                        <i class="cc BTC-alt"></i>
                    </label>
                </div>
                <select
                    v-model="$v.currency.$model"
                    id="currency"
                    class="form-control"
                    name="currency"
                >
                    <option value="">Select</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="litecoin">Litecoin</option>
                </select>
            </div>
        </validate-field>

        <validate-field title="Payment Method" field="method" :validations="$v.method">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text">
                        <i class="fa fa-bank"></i>
                    </label>
                </div>
                <select
                    v-model="$v.method.$model"
                    id="method"
                    class="form-control"
                    name="method"
                >
                    <option value="">Select</option>
                    <option value="bank">Bank of America ********45845</option>
                    <option value="master">Master Card ***********5458</option>
                </select>
            </div>
        </validate-field>

        <validate-field title="Enter your amount" field="amount" :validations="$v.amount">
            <div class="input-group">
                <input v-model="currencyAmount" type="text" name="currency_amount" class="form-control" placeholder="0.0214 BTC">
                <input v-model="usdAmount" type="text" name="usd_amount" class="form-control" placeholder="125.00 USD">
            </div>
        </validate-field>

        <div class="d-flex justify-content-between mb-3">
            <p class="mb-0">Monthly Limit</p>
            <h6 class="mb-0">$49750 remaining</h6>
        </div>

        <button type="submit" name="submit" class="btn btn-success btn-block">Exchange Now</button>
    </form>
</template>

<script>
    import validateField from '@app/components/ValidateField.vue';
    import {required} from 'vuelidate/lib/validators';

    export default {
        components: {validateField},

        data() {
            return {
                currency: '',
                method: '',
                currencyAmount: '',
                usdAmount: '',
            }
        },

        computed: {
            amount() {
                return this.currencyAmount && this.usdAmount
                    ? `${this.currencyAmount} ${this.usdAmount}` : '';
            }
        },

        validations: {
            currency: {required},
            method: {required},
            currencyAmount: {required},
            usdAmount: {required},
            amount: {required}
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