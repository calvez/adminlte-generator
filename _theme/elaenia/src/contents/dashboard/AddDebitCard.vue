<template>
    <verification-body>
        <template #header>
            <h4 class="card-title">Link a debit card</h4>
        </template>

        <form @submit.prevent="$router.push('/dashboard/verify-step-6')" class="identity-upload">
            <div class="form-row">
                <div class="form-group col-xl-12">
                    <label class="mr-sm-2">Name on card </label>
                    <input type="text" class="form-control" placeholder="Maria Pascle">
                </div>
                <div class="form-group col-xl-12">
                    <label class="mr-sm-2">Card number </label>
                    <input type="text" class="form-control" placeholder="5658 4258 6358 4756">
                </div>
                <div class="form-group col-xl-4">
                    <label class="mr-sm-2">Expiration </label>
                    <input type="text" class="form-control" placeholder="10/22">
                </div>
                <div class="form-group col-xl-4">
                    <label class="mr-sm-2">CVC </label>
                    <input type="text" class="form-control" placeholder="125">
                </div>
                <div class="form-group col-xl-4">
                    <label class="mr-sm-2">Postal code </label>
                    <input type="text" class="form-control" placeholder="2368">
                </div>

                <div class="text-center col-12">
                    <button type="submit" class="btn btn-success pl-5 pr-5">Save</button>
                </div>
            </div>
        </form>
    </verification-body>
</template>

<script>
    import verificationBody from '@app/components/dashboard/VerificationBody.vue';

    export default {
        components: {verificationBody}
    }
</script>