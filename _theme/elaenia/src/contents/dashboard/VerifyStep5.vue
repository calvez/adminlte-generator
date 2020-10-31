<template>
    <verification-body>
        <template #header>
            <h4 class="card-title">Add New Account</h4>
        </template>

        <div class="add-bank-card">
            <div class="row my-4">
                <div class="col-md-6">
                    <router-link to="/dashboard/add-bank-acc" class="d-block">
                        <div class="media">
                            <span class="mr-3"><i class="fa fa-bank"></i></span>
                            <div class="media-body">
                                <h4 class="mt-0 mb-3">Bank account</h4>
                                <p>Use bank account to make purchase and sells. Prices are
                                    locked today. Trades may take 4-5 days to process</p>
                                <p class="text-muted">Recommended for invest large amount</p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/dashboard/add-debit-card" class="d-block">
                        <div class="media">
                            <span class="mr-3"><i class="fa fa-credit-card"></i></span>
                            <div class="media-body">
                                <h4 class="mt-0 mb-3">Debit card</h4>
                                <p>Use any visa or mastercard debit card to make small
                                    investment. Add a bank or wallet to sell</p>
                                <p class="text-muted">Recommended for invest small amount</p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </verification-body>
</template>

<script>
    import verificationBody from '@app/components/dashboard/VerificationBody.vue';

    export default {
        components: {verificationBody},
    }
</script>