<template>
    <verification-body>
        <template #header>
            <h4 class="card-title">Link a bank account</h4>
        </template>

        <form @submit.prevent="$router.push('/dashboard/verify-step-6')" class="identity-upload">
            <div class="form-row">
                <div class="form-group col-xl-12">
                    <label class="mr-sm-2">Routing number </label>
                    <input type="text" class="form-control" placeholder="25487">
                </div>
                <div class="form-group col-xl-12">
                    <label class="mr-sm-2">Account number </label>
                    <input type="text" class="form-control" placeholder="36475">
                </div>
                <div class="form-group col-xl-12">
                    <label class="mr-sm-2">Full name </label>
                    <input type="text" class="form-control" placeholder="Maria Pascle">
                </div>
                <div class="form-group col-xl-12">
                    <img src="/images/routing.png" alt="" class="img-fluid">
                </div>

                <div class="text-center col-12">
                    <router-link to="/dashboard/verify-step-5" class="btn btn-primary mx-2">Back</router-link>
                    <button type="submit" class="btn btn-success mx-2">Save</button>
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