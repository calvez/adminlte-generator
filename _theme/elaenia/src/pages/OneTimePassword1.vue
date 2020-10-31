<template>
    <form-page>
        <router-link to="sign-in" class="page-back text-muted">
            <span><i class="fa fa-angle-left"></i></span> Back
        </router-link>
        <h3 class="text-center">OTP Verification</h3>
        <p class="text-center mb-5">We will send one time code on this number</p>
        <form @submit.prevent="$router.push('otp-2')">
            <div class="form-group">
                <label>Your phone number</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                            <span class="input-group-text pl-4 pr-4"><i
                                    class="fa fa-phone"></i></span>
                    </div>
                    <input type="text" class="form-control" value="+1 12365480">
                </div>
            </div>
            <div class="text-center mt-4">
                <button type="submit" class="btn btn-success btn-block">Send</button>
            </div>
        </form>
        <div class="new-account mt-3 d-flex justify-content-between">
            <p>Don't get code? <a href="#" class="text-primary" @click="$router.go()">Resend</a></p>
        </div>
    </form-page>
</template>

<script>
    import formPage from '@app/components/FormPage.vue';

    export default {
        components: { formPage }
    }
</script>