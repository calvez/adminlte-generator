<template>
    <verification-body>
        <form @submit.prevent="$router.push('/dashboard/settings/linked-account')" class="identity-upload">
            <div class="identity-content">
                <span class="icon"><i class="fa fa-check"></i></span>
                <h4>Congratulation. Your bank added</h4>
                <p>Efficiently provide access to installed base core competencies and end end
                    data Interactively target equity.</p>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-success pl-5 pr-5">Continue</button>
            </div>
        </form>
    </verification-body>
</template>

<script>
    import verificationBody from '@app/components/dashboard/VerificationBody.vue';

    export default {
        components: {verificationBody},
    }
</script>