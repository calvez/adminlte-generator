<template>
    <verification-body>
        <form class="identity-upload">
            <div class="identity-content">
                <span class="icon"><i class="fa fa-shield"></i></span>
                <h4>We are verifying your ID</h4>
                <p>Your identity is being verified. We will email you once your verification has
                    completed.
                </p>
            </div>

            <div class="upload-loading text-center mb-3">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
            </div>
        </form>
    </verification-body>
</template>

<script>
    import verificationBody from '@app/components/dashboard/VerificationBody.vue';

    export default {
        components: {verificationBody},

        mounted() {
            let self = this;
            window.setTimeout(function () {
                self.$router.push('/dashboard/verify-step-4');
            }, 2000);
        }
    }
</script>