<template>
    <form-page>
        <template #header>
            <h4 class="card-title">Reset password</h4>
        </template>

        <form @submit.prevent="$router.push('sign-in')">
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" value="hello@example.com">
            </div>
            <div class="text-center">
                <router-link to="sign-in" type="submit" class="btn btn-success btn-block">Reset</router-link>
            </div>
        </form>
        <div class="new-account mt-3">
            <p class="mb-1">Not Received? </p>
            <a class="text-primary" href="#" @click="$router.go()">Resend</a>
        </div>
    </form-page>
</template>

<script>
    import formPage from '@app/components/FormPage.vue';

    export default {
        components: { formPage }
    }
</script>