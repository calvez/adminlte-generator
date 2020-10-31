<template>
    <verification-body>
        <form @submit.prevent="$router.push('/dashboard/verify-step-3')" class="identity-upload">

            <div class="identity-content">
                <h4>Upload your ID card</h4>
                <span>(Driving License or Government ID card)</span>

                <p>Uploading your ID helps as ensure the safety and security of your founds</p>
            </div>

            <div class="form-group">
                <label class="mr-sm-2">Upload Front ID </label>
                <span class="float-right">Maximum file size is 2mb</span>
                <div class="file-upload-wrapper" data-text="front.jpg">
                    <input name="file-upload-field" type="file" class="file-upload-field" value="">
                </div>
            </div>
            <div class="form-group">
                <label class="mr-sm-2">Upload Back ID </label>
                <span class="float-right">Maximum file size is 2mb</span>
                <div class="file-upload-wrapper" data-text="back.jpg">
                    <input name="file-upload-field" type="file" class="file-upload-field"
                           value="">
                </div>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-success pl-5 pr-5">Submit</button>
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